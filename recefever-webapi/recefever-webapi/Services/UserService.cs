using recefever_webapi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace recefever_webapi.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(
            IOptions<RecipeDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(
                bookStoreDatabaseSettings.Value.UserCollectionName);
        }

        public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

        public async Task<User?> GetAsync(string id) =>
            await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<User?> GetByEmailAsync(string email) =>
            await _userCollection.Find(x => x.email == email).FirstOrDefaultAsync();

        public async Task CreateAsync(User newUser) =>
            await _userCollection.InsertOneAsync(newUser);

        public async Task UpdateAsync(string id, User updatedBook) =>
            await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

        public async Task RemoveAsync(string id) =>
            await _userCollection.DeleteOneAsync(x => x.Id == id);


        public User HashPassword(User user)
        {
            byte[] salt = new byte[128 / 8];
            using(var rngCsp = new RNGCryptoServiceProvider())
            {
                rngCsp.GetNonZeroBytes(salt);
            }

            string hased = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: user?.password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            user.password = hased;
            user.salt = Convert.ToBase64String(salt);

            return user;
        }

        public bool VerifyPassword(string enteredPassword, string storedHash, string storedSalt)
        {
            byte[] saltBytes = Convert.FromBase64String(storedSalt);
            if (saltBytes == null)
            {
                return false;
            }
            string hased = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: enteredPassword,
                salt: saltBytes,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return hased == storedHash;
        }
    }
}

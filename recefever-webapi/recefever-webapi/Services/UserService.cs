using recefever_webapi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace recefever_webapi.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;
        private readonly TokenOptions _tokenOptions;

        public UserService(
            IOptions<RecipeDatabaseSettings> bookStoreDatabaseSettings, IOptions<TokenOptions> options)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(
                bookStoreDatabaseSettings.Value.UserCollectionName);

            _tokenOptions = options.Value;
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

        public string generateToken(List<Claim> claims)
        {
            SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenOptions.SecurityKey));
            SigningCredentials signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken tokeOptions = new JwtSecurityToken(
            issuer: _tokenOptions.Issuer,
            audience: _tokenOptions.Audience,
            claims,
            expires: DateTime.Now.AddMinutes(_tokenOptions.AccessTokenExpiration),
            signingCredentials: signinCredentials
            );

            return new JwtSecurityTokenHandler().WriteToken(tokeOptions);
        }
    }
}

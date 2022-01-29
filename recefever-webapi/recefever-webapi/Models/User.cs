using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace recefever_webapi.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? birthDate { get; set; }
        public string? salt { get; set; }
    }
}

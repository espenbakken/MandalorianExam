using MandalorianApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MandalorianApi.Models
{
    public class Character : ICharacter
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string CharacterName { get; set; }
        public string CharacterPicture { get; set; }
        public string CharacterQuote { get; set; }
        public string CharacterDescription { get; set; }
    }
}
using MandalorianApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MandalorianApi.Models
{
    public class Actor : IActor
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string ActorName { get; set; }
        public string ActorPicture { get; set; }
        public string ActorCharacter { get; set; }
        public string ActorBorn { get; set; }
        public string ActorHistory { get; set; }
    }
}
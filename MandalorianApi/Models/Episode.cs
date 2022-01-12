using MandalorianApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MandalorianApi.Models
{
    public class Episode : IEpisode
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Season { get; set; }
        public string Date { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public string EpisodePicture { get; set; }
        public string EpisodeId { get; set; }
    }
}
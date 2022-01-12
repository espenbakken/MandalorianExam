using MongoDB.Driver;
using MandalorianApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace MandalorianApi.Services
{
    public class EpisodeService
    {
        private readonly IMongoCollection<Episode> _episodes;

        public EpisodeService(IEpisodeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _episodes = database.GetCollection<Episode>(settings.EpisodeCollectionName);
        }

        //READ
        public List<Episode> GetEpisodes()
        {
            return _episodes.Find(episode => true).ToList();
        }

        //READ Episodes by season
        public List<Episode> GetEpisodesBySeason(string season)
        {
            return _episodes.Find(episode => episode.Season == season).ToList();
        }

        //READ Episode by episodeId
        public List<Episode> GetEpisode(string episodeId)
        {
            return _episodes.Find(episode => episode.EpisodeId == episodeId).ToList();
        }

        //CREATE
        public Episode Create(Episode newEpisode)
        {

            _episodes.InsertOne(newEpisode);
            return newEpisode;
        }

        //Update new rating based on episodeId
        public void UpdateRating(string episodeId, int newRating)
        {
            var episodeToUpdate = _episodes.Find(episode => episode.EpisodeId == episodeId).FirstOrDefault();
            episodeToUpdate.Rating = newRating;
            _episodes.ReplaceOne(e => e.EpisodeId == episodeId, episodeToUpdate);
        }



        // Delete one episode based on episodeId
        public void DeleteOneEpisode(string episodeId) =>
            _episodes.DeleteOne(episode => episode.EpisodeId == episodeId);


    }

}
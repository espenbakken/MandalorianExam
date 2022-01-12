using MongoDB.Driver;
using MandalorianApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace MandalorianApi.Services
{
    public class ActorService
    {
        private readonly IMongoCollection<Actor> _actors;

        public ActorService(IActorDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _actors = database.GetCollection<Actor>(settings.ActorCollectionName);
        }

        //READ
        public List<Actor> GetActors()
        {
            return _actors.Find(actor => true).ToList();
        }

        //CREATE
        public Actor PostActor(Actor newActor)
        {
            _actors.InsertOne(newActor);
            return newActor;
        }

    }

}
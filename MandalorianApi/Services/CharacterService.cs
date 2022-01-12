using MongoDB.Driver;
using MandalorianApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace MandalorianApi.Services
{
    public class CharacterService
    {
        private readonly IMongoCollection<Character> _characters;

        public CharacterService(ICharacterDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _characters = database.GetCollection<Character>(settings.CharacterCollectionName);
        }

        //READ
        public List<Character> GetCharacters()
        {
            return _characters.Find(character => true).ToList();
        }

        //CREATE
        public Character PostCharacter(Character newCharacter)
        {
            _characters.InsertOne(newCharacter);
            return newCharacter;
        }

    }

}
namespace MandalorianApi.Models
{
    public interface ICharacterDatabaseSettings
    {
        string CharacterCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class CharacterDatabaseSettings : ICharacterDatabaseSettings 
    {
        public string CharacterCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
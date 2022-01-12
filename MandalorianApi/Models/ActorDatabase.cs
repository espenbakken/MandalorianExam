namespace MandalorianApi.Models
{
    public interface IActorDatabaseSettings
    {
        string ActorCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class ActorDatabaseSettings : IActorDatabaseSettings
    {
        public string ActorCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
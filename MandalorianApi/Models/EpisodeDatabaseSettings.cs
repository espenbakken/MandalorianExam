namespace MandalorianApi.Models
{
    public interface IEpisodeDatabaseSettings
    {
        string EpisodeCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class EpisodeDatabaseSettings : IEpisodeDatabaseSettings 
    {
        public string EpisodeCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
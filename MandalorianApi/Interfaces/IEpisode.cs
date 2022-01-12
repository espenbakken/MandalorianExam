namespace MandalorianApi.Interfaces
{
    public interface IEpisode
    {
        string Id { get; set; }
        string Title { get; set; }
        string Season { get; set; }
        string Date { get; set; }
        int Rating { get; set; }
        string Description { get; set; }
        string EpisodePicture { get; set; }
        string EpisodeId { get; set; }
    }
}
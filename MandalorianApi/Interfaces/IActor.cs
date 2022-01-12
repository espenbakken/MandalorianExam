namespace MandalorianApi.Interfaces
{
    public interface IActor
    {
        string Id { get; set; }
        string ActorName { get; set; }
        string ActorPicture { get; set; }
        string ActorCharacter { get; set; }
        string ActorBorn { get; set; }
        string ActorHistory { get; set; }
    }
}
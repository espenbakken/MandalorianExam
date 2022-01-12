namespace MandalorianApi.Interfaces 
{
    public interface ICharacter
    {
        string Id { get; set; }
        string CharacterName { get; set; }
        string CharacterPicture { get; set; }
        string CharacterQuote { get; set; }
        string CharacterDescription { get; set; }
    }
}
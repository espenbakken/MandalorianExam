using Microsoft.AspNetCore.Mvc;
using MandalorianApi.Models;
using System.Collections.Generic;
using MandalorianApi.Services;

namespace MandalorianApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly CharacterService _characterService; 

        public CharacterController(CharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet]
        public IEnumerable<Character> GetCharacters()
        {
            return _characterService.GetCharacters();
        }

        [HttpPost]
        public Character PostCharacter(Character newCharacter)
        {
            _characterService.PostCharacter(newCharacter);
            return newCharacter;
        }
    }
}
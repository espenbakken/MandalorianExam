using Microsoft.AspNetCore.Mvc;
using MandalorianApi.Models;
using System.Collections.Generic;
using MandalorianApi.Services;

namespace MandalorianApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActorController : ControllerBase
    {
        private readonly ActorService _actorService;

        public ActorController(ActorService actorService)
        {
            _actorService = actorService;
        }

        [HttpGet]
        public IEnumerable<Actor> GetActors()
        {
            return _actorService.GetActors();
        }

        [HttpPost]
        public Actor PostActor(Actor newActor)
        {
            _actorService.PostActor(newActor);
            return newActor;
        }
    }
}
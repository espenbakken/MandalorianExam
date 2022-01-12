using Microsoft.AspNetCore.Mvc;
using MandalorianApi.Models;
using System.Collections.Generic;
using MandalorianApi.Services;

namespace MandalorianApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EpisodeController : ControllerBase
    {
        private readonly EpisodeService _episodeService;

        public EpisodeController(EpisodeService episodeService)
        {
            _episodeService = episodeService;
        }

        [HttpGet]
        public IEnumerable<Episode> GetEpisodes()
        {
            return _episodeService.GetEpisodes();
        }


        [HttpGet("{season}")]
        public IEnumerable<Episode> GetEpisodesBySeason(string season)
        {
            return _episodeService.GetEpisodesBySeason(season);
        }

        [HttpGet("{season}/{episodeId}")]
        public IEnumerable<Episode> GetEpisode(string episodeId)
        {
            return _episodeService.GetEpisode(episodeId);
        }


        [HttpPost]
        public Episode Post(Episode newEpisode)
        {
            return _episodeService.Create(newEpisode);
        }

        // Her hadde vi egentlig planer om å legge inn nye verdier på rating per episode for
        // så å dele på antall inputs i MongoDb. Dette hadde vi dessverre ikke tid til å fikse nå
        [HttpPatch("Update")]
        public ActionResult<IEnumerable<Episode>> UpdateRating(string episodeId, int newRating)
        {
            var episode = _episodeService.GetEpisode(episodeId);

            if (episode == null)
            {
                return NotFound();
            }

            _episodeService.UpdateRating(episodeId, newRating);
            var updatedEpisode = _episodeService.GetEpisode(episodeId);
            return updatedEpisode;
        }


        [HttpDelete("Delete")]
        public ActionResult<IEnumerable<Episode>> DeleteOneEpisode(string episodeId)
        {
            var episodeToDelete = _episodeService.GetEpisode(episodeId);

            if (episodeToDelete == null)
            {
                return NotFound();
            }
            _episodeService.DeleteOneEpisode(episodeId);

            return NoContent();
        }
    }
}

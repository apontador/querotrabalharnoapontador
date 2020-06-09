using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Apontador.API.BusinnessManagers;
using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using Apontador.API.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Annotations;

namespace Apontador.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceController : ControllerBase
    {
        private readonly ILogger<PlaceController> _logger;
        private readonly IPlaceManager _placeManager;

        public PlaceController(ILogger<PlaceController> logger, IPlaceManager placeManager)
        {
            _logger = logger;
            _placeManager = placeManager;
        }


        [HttpPost("add")]
        [SwaggerResponse(200, "Retorna o 'Id' do novo cadastro.", Type = typeof(PlaceAddedModel))]
        public async Task<IActionResult> Add(PlaceModel placeModel)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                return Ok(_placeManager.ParsePlaceRequest(placeModel));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ApiHelper.ParseApiInternalErrorMessage(_logger, ex));
            }
        }

        [HttpGet("list/{search_text}/{page}")]
        [SwaggerResponse(200, "Retorna uma lista conforme os termos de busca", Type = typeof(PlaceListModel))]
        public async Task<IActionResult> GetList(string search_text, int page)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                return Ok(_placeManager.GetList(search_text, page));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ApiHelper.ParseApiInternalErrorMessage(_logger, ex));
            }
            
        }

    }
}
using Apontador.API.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Swagger
{
    public class PlaceResponseExample : IExamplesProvider<PlaceAddedModel>
    {
        public PlaceAddedModel GetExamples()
        {
            return new PlaceAddedModel()
            {
                Id = 123456
            };
        }
    }
}

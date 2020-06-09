using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Swagger
{
    public class PlaceRequestExample : IExamplesProvider<PlaceModel>
    {
        public PlaceModel GetExamples()
        {
            return new PlaceModel
            {
                Name = "Independence Pharmacy Inc",
                Phone = "(620) 331-7384",
                Address = "205 N Pennsylvania Ave, Independence, KS 67301"
            };
        }

    }
}

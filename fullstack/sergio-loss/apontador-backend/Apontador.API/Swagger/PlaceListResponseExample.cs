using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Swagger
{
    public class PlaceListResponseExample : IExamplesProvider<List<Place>>
    {
        public List<Place> GetExamples()
        {
            return new List<Place>()
            {
                new Place()
                {
                    Id = 8888,
                    Name = "Place Name 1111",
                    Phone = "(88) 8888-8888",
                    Address = "Address - Place 1111"
                },
                new Place()
                {
                    Id = 9999,
                    Name = "Place Name 2222",
                    Phone = "(88) 8888-8888",
                    Address = "Address - Place 2222"
                }
            };
        }

    }
}

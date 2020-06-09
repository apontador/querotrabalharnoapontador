using Apontador.API.DataAccess.DTO;
using Microsoft.Extensions.WebEncoders.Testing;
using System.Collections.Generic;

namespace Apontador.API.Models
{
    public class PlaceListModel
    {
        public string search_text { get; set; }

        public int matches { get; set; }

        public int current_page { get; set; }

        public List<Place> places { get; set; }

        public PlaceListModel()
        {
            places = new List<Place>();
        }
    }
}

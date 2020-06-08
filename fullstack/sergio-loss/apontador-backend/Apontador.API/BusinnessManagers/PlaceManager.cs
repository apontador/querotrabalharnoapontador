using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using Apontador.API.Util;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using LiteDbContext = Apontador.API.DataAccess.LiteDbContext;

namespace Apontador.API.BusinnessManagers
{
    public class PlaceManager : IPlaceManager
    {

        private readonly ILogger<Place> _logger;
        private readonly LiteDbContext _ldb;

        public PlaceManager(ILogger<Place> logger, LiteDbContext ldb)
        {
            _logger = logger;
            _ldb = ldb;
        }

        public Object ParsePlaceRequest(PlaceModel placeModel)
        {
            try
            {
                Place place = CastModel.Cast<PlaceModel, Place>(placeModel);
                _ldb.Places.Add(place);

                if (place.Id == 0)
                {
                    throw new Exception("Error - ParsePlaceRequest");
                }

                return new { Id = place.Id } ;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public PlaceListModel GetList(string searchText, int page)
        {
            int totalMatches = 0;
            int limit = 10;
            int offset = (page - 1) * limit;
            List<Place> placeList = new List<Place>();

            totalMatches = _ldb.Places.Where(x => x.Name.Contains(searchText) || x.Address.Contains(searchText)).Count();

            if (totalMatches > 0)
            {
                placeList = _ldb.Places
                                .Where(x => x.Name.Contains(searchText) || x.Address.Contains(searchText))
                                .Skip(offset)
                                .Take(limit)
                                .ToList();
            }

            PlaceListModel plm = new PlaceListModel();
            plm.search_text = searchText;
            plm.matches = totalMatches;
            plm.current_page = page;
            plm.places = placeList;

            return plm;
        }

    }
}

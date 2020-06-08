using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using System;
using System.Collections.Generic;

namespace Apontador.API.BusinnessManagers
{
    public interface IPlaceManager
    {
        PlaceListModel GetList(string searchText, int page);
        Object ParsePlaceRequest(PlaceModel placeModel);
    }
}
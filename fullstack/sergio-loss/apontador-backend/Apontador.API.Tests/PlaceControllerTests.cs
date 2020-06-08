using Apontador.API.BusinnessManagers;
using Apontador.API.Controllers;
using Apontador.API.DataAccess.DTO;
using Apontador.API.Models;
using Apontador.API.Util;
using LiteDB;
using LiteDBContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Apontador.API.Tests
{
    public class PlaceControllerTests
    {
        private ILogger<PlaceController> _loggerController;
        private ILogger<Place> _logger;

        private PlaceController _controller;
        private API.DataAccess.LiteDbContext _db;
        private IPlaceManager _placeManager;

        public PlaceControllerTests()
        {

            /*
             * Using a real database for tests
             * */
            LiteDbContextOptions testDBContextOptions = new LiteDbContextOptions()
            {
                ConnectionString = new ConnectionString()
                {
                    Filename = ApiHelper.GetApplicationPath() + "\\DataFiles\\TestApontador.db",
                    Password = "password",
                    Connection = ConnectionType.Shared
                }
            };

            _loggerController = new Logger<PlaceController>(new NullLoggerFactory());
            _logger = new Logger<Place>(new NullLoggerFactory());

            _db = new API.DataAccess.LiteDbContext(testDBContextOptions);
            _placeManager = new PlaceManager(_logger, _db);
            _controller = new PlaceController(_loggerController, _placeManager);

        }


        [Fact]
        public async Task Create_InvalidObjectPassed_ReturnsBadRequest()
        {
            // Arrange
            var nameMissingPlace = new PlaceModel()
            {
                Phone = "(11) 1234-5678",
                Address = "Rua teste, 123"
            };
            _controller.ModelState.AddModelError("Name", "Required");

            // Act
            var badResponse = await _controller.Add(nameMissingPlace);

            // Assert
            Assert.IsType<BadRequestObjectResult>(badResponse);
        }

        [Fact]
        public async Task Create_ValidObjectPassed_ReturnsCreatedResponse()
        {
            // Arrange
            PlaceModel testPlace = new PlaceModel()
            {
                Name = "Local de teste",
                Phone = "(11) 1234-5678",
                Address = "Rua Teste, 123"
            };

            // Act
            var createdResponse = await _controller.Add(testPlace);

            // Assert
            Assert.IsType<OkObjectResult>(createdResponse);
        }

        [Fact]
        public void GetList_WhenCalled_ReturnsOkResult()
        {
            // Arrange
            string searchText = "teste";
            int pagina = 1;

            // Act
            var okResult = _controller.GetList(searchText, pagina);

            // Assert
            Assert.IsType<OkObjectResult>(okResult.Result);
        }

        [Fact]
        public void GetList_WhenCalled_ReturnsList()
        {
            // Arrange
            string searchText = "teste";
            int pagina = 1;
            var itemsCount = _db.Places.Where(x => x.Name.Contains(searchText) || x.Address.Contains(searchText)).Count();

            // Act
            var okResult = _controller.GetList(searchText, 1).Result as OkObjectResult;

            // Assert
            var placeListModel = Assert.IsType<PlaceListModel>(okResult.Value);
            Assert.Equal(itemsCount, placeListModel.matches);
        }
    }
}

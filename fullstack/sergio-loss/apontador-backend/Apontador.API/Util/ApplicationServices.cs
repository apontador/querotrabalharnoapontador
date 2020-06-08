using Apontador.API.BusinnessManagers;
using Apontador.API.DataAccess;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Apontador.API.Util
{
    public static class ApplicationServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddSingleton<LiteDbContext, LiteDbContext>();

            services.AddScoped<IPlaceManager, PlaceManager>();

            return services;
        }
    }
}

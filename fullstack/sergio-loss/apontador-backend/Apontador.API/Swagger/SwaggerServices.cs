using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Swagger
{
    public static class SwaggerServices
    {
        public static IServiceCollection AddSwaggerServices(this IServiceCollection services, IConfiguration configuration)
        {
            var openApiInfo = new OpenApiInfo()
            {
                Version = "v1",
                Title = "Apontador Maplink API",
                Description = @"<strong>Teste Apontador Maplink.</strong></br>&nbsp;
                                </br>API desenvolvida conforme especificações do teste proposto pelo <a href='http://www.apontador.com.br' target='_BLANK'>Apontador Maplink</a>
                                </br></br>Esta API foi desenvolvida em DotNet Core e está hospedada na Amazon AWS.
                                </br>&nbsp;</br>A API pode ser testada por esta interface do Swagger ou através de outras ferramentas para testes de APIs como, por exemplo, o <a target='_BLANK' href='https://www.getpostman.com/'>Postman</a>.",
                Contact = new OpenApiContact()
                {
                    Name = "Sergio S Loss",
                    //Email = "sergio.sloss@gmail.com",
                    Url = new Uri("https://www.linkedin.com/in/sergio-s-loss/")
                }
            };


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", openApiInfo);
                c.EnableAnnotations();
                c.ExampleFilters();
                var filePath = Path.Combine(System.AppContext.BaseDirectory, "APONTADOR.API.xml");
                c.IncludeXmlComments(filePath);
            });

            services.AddSwaggerExamplesFromAssemblyOf<PlaceRequestExample>();
            services.AddSwaggerExamplesFromAssemblyOf<PlaceResponseExample>();


            return services;
        }
    }
}

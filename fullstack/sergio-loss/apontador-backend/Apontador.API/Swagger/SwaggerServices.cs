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
                Description = @"<strong>Teste Apontador Maplink.</strong><br/>&nbsp;
                                <br/>API desenvolvida conforme as <a href='https://github.com/apontador/querotrabalharnoapontador/tree/master/fullstack' target='_BLANK'>especificações</a> do teste proposto pelo <a href='http://www.apontador.com.br' target='_BLANK'>Apontador Maplink</a>
                                <br/><br/>Esta API foi desenvolvida em Net Core e está hospedada na Amazon AWS para avaliação.
                                <br/>O site (front-end), também hospedado na Amazon AWS, com as interfaces de usuário para interação com a API pode ser acessado <a href='http://apontador-api-test.us-east-1.elasticbeanstalk.com/' target='_BLANK'>neste link</a>.
                                <br/>&nbsp;</br>As especificações para implementação da comunicação com os end-points desta API (request / response) podem ser encontradas abaixo nesta interface do Swagger",
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
            services.AddSwaggerExamplesFromAssemblyOf<PlaceListResponseExample>();


            return services;
        }
    }
}

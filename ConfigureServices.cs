using CSS.Creaciones.Pajov.Infraestructure.Persistence;
using CSS.Creaciones.PAJOV.Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CSS.Creaciones.Pajov.Infraestructure
{
    public static class ConfigureServices
    {

        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("ConfeccionesPajov"));
            });

            services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
            services.AddHttpClient();

            return services;
        }
    }
}

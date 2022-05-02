using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using TopazTodo.Application.Interfaces;
using TopazTodo.Infrastructure.Identity;

namespace TopazTodo.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"),
            b => b.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName)));
        services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<AppDbContext>());

        services
            .AddDefaultIdentity<IdentityUser>()
            .AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<AppDbContext>();

        services
            .AddIdentityServer()
            .AddApiAuthorization<IdentityUser, AppDbContext>();

        services.AddTransient<IIdentityService, IdentityService>();


        return services;
    }
}
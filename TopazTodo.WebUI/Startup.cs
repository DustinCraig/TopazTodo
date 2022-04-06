
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using TopazTodo.Infrastructure;

namespace TopazTodo.WebUI;

public class Startup
{
    public IConfiguration Configuration { get; }


    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews();
        services.AddInfrastructure(Configuration);
        services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
            })
            .AddGoogle(options =>
            {
                options.ClientId = Configuration["AppSettings:GoogleClientId"];
                options.ClientSecret = Configuration["AppSettings:GoogleClientSecret"];
            });

    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseAuthentication();
        app.UseAuthorization();
        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
        });

    }
}
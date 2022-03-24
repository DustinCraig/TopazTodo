using TopazTodo.Infrastructure;

namespace TopazTodo.WebUI;

// Migrations Command
// dotnet ef --startup-project ../TopazTodo.WebUI/ --project ../TopazTodo.Infrastructure/  migrations add InitialCreate


public class Program
{
    public async static Task Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();

        using (var scope = host.Services.CreateScope())
        {
            var services = scope.ServiceProvider;

            try
            {
                var context = services.GetRequiredService<AppDbContext>();
                context.Database.EnsureCreated();
            } catch (Exception ex)
            {

            }
        }

        await host.RunAsync();

    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => webBuilder.UseStartup<Startup>());
}
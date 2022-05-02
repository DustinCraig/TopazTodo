using TopazTodo.Application.Interfaces;
using TopazTodo.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using System.Reflection;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Identity;

namespace TopazTodo.Infrastructure;

public class AppDbContext : ApiAuthorizationDbContext<IdentityUser>, IApplicationDbContext 
{

    public DbSet<TodoItem> TodoItems { get; set; }
    public DbSet<TodoList> TodoLists { get; set; }


    public AppDbContext(DbContextOptions<AppDbContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(builder);
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        int result = await base.SaveChangesAsync(cancellationToken);
        return result;
    }
}
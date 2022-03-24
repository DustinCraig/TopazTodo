using TopazTodo.Application.Interfaces;
using TopazTodo.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace TopazTodo.Infrastructure;

public class AppDbContext : DbContext, IApplicationDbContext
{

    public DbSet<TodoItem> TodoItems { get; set; }
    public DbSet<TodoList> TodoLists { get; set; }

    public AppDbContext() { }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
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
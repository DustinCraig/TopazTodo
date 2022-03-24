using TopazTodo.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace TopazTodo.Application.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoItem> TodoItems { get; set; }
    DbSet<TodoList> TodoLists { get; set; }
}
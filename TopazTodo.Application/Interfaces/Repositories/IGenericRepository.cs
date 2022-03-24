namespace TopazTodo.Application.Interfaces;

public interface IGenericRepositoryAsync<T> where T : class
{
    Task<T> GetByIdAsync(int id);
    Task<IList<T>> GetAllAsync();
    Task<T> AddAsync(T entity);
    Task<T> UpdateAsync(T entity);
    Task<T> DeleteAsync(T entity);
}

using System.ComponentModel.DataAnnotations;

namespace TopazTodo.Application.DTOs;

public class UserLoginRequest
{
    [Required]
    public string TokenId { get; set; }
    [Required]
    public string Provider { get; set; }
}
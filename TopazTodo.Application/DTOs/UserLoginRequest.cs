
using Microsoft.AspNetCore.Authentication;

namespace TopazTodo.Application.DTOs;

public class UserLoginRequest
{
    public IList<AuthenticationScheme> ExternalLogins { get; set; }
}
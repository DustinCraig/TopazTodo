using Microsoft.AspNetCore.Identity;
using TopazTodo.Application.DTOs;

namespace TopazTodo.Application.Interfaces;

public interface IIdentityService
{
    public Task<IdentityUser> GetUserFromExternalLogin(UserLoginRequest loginReqeust);

}
using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using TopazTodo.Application.DTOs;
using TopazTodo.Application.Interfaces;
using TopazTodo.Domain.Entities;

namespace TopazTodo.Infrastructure.Identity;

public class IdentityService : IIdentityService
{
    private readonly UserManager<IdentityUser> _userManager;

    public IdentityService(
        UserManager<IdentityUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<IdentityUser> GetUserFromExternalLogin(UserLoginRequest userLoginRequest)
    {
        try
        {
            var settings = new GoogleJsonWebSignature.ValidationSettings
            {
                Audience = new List<string>() { "502163719591-s5jjj1sr04029lbhoabv96jsgjpuqb3d.apps.googleusercontent.com" }
            };

            var payload = await GoogleJsonWebSignature.ValidateAsync(userLoginRequest.TokenId, settings);

            var info = new UserLoginInfo(userLoginRequest.Provider, payload.Subject, userLoginRequest.Provider);
            var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

            return user;
        }
        catch (Exception ex)
        {
            // TODO: Implement exception handling
            return null;
        }
    }

}
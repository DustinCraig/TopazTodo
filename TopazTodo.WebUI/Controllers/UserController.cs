using Google.Apis.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TopazTodo.Application.DTOs;

namespace TopazTodo.WebUI.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{

    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public async Task<IActionResult> AuthenticateAsync([FromBody] UserLoginRequest data)
    {
        try
        {
            GoogleJsonWebSignature.ValidationSettings settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                
            };

            GoogleJsonWebSignature.Payload payload = await GoogleJsonWebSignature.ValidateAsync(data.TokenId, settings);
            Console.WriteLine(payload);
        } catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        
        return Ok(new { Success = true });
    }

    [HttpGet("test")]
    public IActionResult Test()
    {
        return new OkObjectResult(new { Message = "fd" });
    }
}


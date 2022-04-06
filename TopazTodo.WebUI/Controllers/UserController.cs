using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Mvc;

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

    [HttpPost("login")]
    public ChallengeResult Login()
    {
        return new ChallengeResult
            (GoogleDefaults.AuthenticationScheme,
                new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse", "GoogleLogin")}
            );
    }

    [HttpGet("test")]
    public IActionResult Test()
    {
        return new OkObjectResult(new { Message = "fd" });
    }
}


using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok("");
            }
            catch (Exception ex)
            {

                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}
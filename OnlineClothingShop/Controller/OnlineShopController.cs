using Microsoft.AspNetCore.Mvc;

namespace OnlineClothingShop.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class OnlineShopController : Controller
    {

        [HttpGet]
        [Route("test")]
        public IActionResult TestMethod()
        {
            return Ok("ok");
        }
    }
}

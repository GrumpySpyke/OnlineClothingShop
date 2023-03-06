using Microsoft.AspNetCore.Mvc;

namespace OnlineClothingShop.Controllers
{
    [Controller]
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

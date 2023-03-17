using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;

namespace OnlineClothingShop.Controllers
{
    [Controller]
    [EnableCors("ShopAllowSpecificOrigins")]
    public class OnlineShopController : Controller
    {

        [HttpGet]
        [Route("account-info")]
        public ActionResult<User> GetAccountInfo(string username)
        {
            return new User
            {
                isAdmin = true,
                username = username,
                password = "1234",
                adress = "Aleea Ghiocei",
                name = "Doru",
                surname = "Cuceritorul",
                phone = "0742851251",
                email="emaogtfea@gmail.com"
            };
        }

        [HttpGet]
        [Route("/orders")]
        public ActionResult<List<OrderDTO>> GetOrders(string username)
        {
            var orders = new List<OrderDTO>();
            var order1 = new OrderDTO {
                id=1,
                adress="Strada Lunga",
                dateIn= DateTime.Now.ToShortDateString(),
                dateOut= DateTime.Now.ToShortDateString(),
                phone="072451255",
                status="Delivering",
                value="5215"
            };
            var order2 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "Delivered",
                value="2451"
            };
            var order3 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "InDeposit",
                value = "2451"
            };
            var order4 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "Returned",
                value = "2451"
            };

            orders.Add(order1);
            orders.Add(order2); 
            orders.Add(order3);
            orders.Add(order4);
            return orders;
        }

        [HttpPost]
        [Route("/filtered-search")]
        public ActionResult<List<Product>> GetFilteredProdcuts(SearchFilters filters)
        {
            var products= new List<Product>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new Product()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                stock = stockValue,
                sex = "M"

            };
            products.Add(product1);

            return products;
            
        }
        
    }
}

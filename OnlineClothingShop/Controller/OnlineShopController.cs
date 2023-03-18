using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;
using System.Xml.Linq;

namespace OnlineClothingShop.Controllers
{
    [Controller]
    [EnableCors("ShopAllowSpecificOrigins")]
    public class OnlineShopController : Controller
    {

        [HttpGet]
        [Route("account-info")]
        public ActionResult<UserData> GetAccountInfo(string username)
        {
            return new UserData
            {
                isAdmin = true,
                username = username,
                password = "1234",
                adress = "Aleea Ghiocei",
                name = "Doru",
                surname = "Cuceritorul",
                phone = "0742851251",
                email = "emaogtfea@gmail.com"
            };
        }

        [HttpGet]
        [Route("/orders")]
        public ActionResult<List<OrderDTO>> GetOrders(string username)
        {
            var products = new List<ProductData>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                sex = "M",
                size = "42",
                disc = true,
                isReturned=false

            };
            product1.stock = stockValue;
            products.Add(product1);

            var orders = new List<OrderDTO>();
            var order1 = new OrderDTO {
                id = 1,
                adress = "Strada Lunga",
                dateIn = DateTime.Now.ToShortDateString(),
                dateOut = DateTime.Now.ToShortDateString(),
                phone = "072451255",
                status = "Delivering",
                value = "5215",
                products = products
            };
            var order2 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "Delivered",
                value = "2451",
                products = products
            };
            var order3 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "InDeposit",
                value = "2451",
                products = products
            };
            var order4 = new OrderDTO
            {
                id = 1,
                adress = "Strada Lunga",
                dateIn = new DateTime().ToShortDateString(),
                dateOut = new DateTime().ToShortDateString(),
                phone = "072451255",
                status = "Returned",
                value = "2451",
                products=products
            };

            orders.Add(order1);
            orders.Add(order2);
            orders.Add(order3);
            orders.Add(order4);
            return orders;
        }

        [HttpPost]
        [Route("/filtered-search")]  
        public ActionResult<List<ProductData>> GetFilteredProdcuts([FromBody] SearchFilters filters)
        {
            var products = new List<ProductData>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                sex = "M",
                size = "42",
                disc = true

            };
            product1.stock = stockValue;
            products.Add(product1);

            return products;

        }

        [HttpGet]
        [Route("/login")]
        public ActionResult<AuthenticateUserResponse> AuthenticateUser(string username, string password)
        {
            var user = new UserData()
            {
                adress = "Strada Lunga",
                email = "gigifloare@gmail.com",
                isAdmin = true,
                name = "Floare",
                surname = "Gigi-Anton",
                password = password,
                phone = "074215215",
                username = username,
            };


            if (username == "dinamo" && password == "1234")
            {
                return new AuthenticateUserResponse()
                {
                    isOk = true,
                    userData = user
                };

            }
            return new AuthenticateUserResponse {
                isOk = false };
        }

        [HttpPost]
        [Route("/register")]
        public ActionResult<RegisterUserResponse> RegisterUser([FromBody] UserData userData)
        {
            userData.isAdmin = false;
            var response= new RegisterUserResponse();

            if (userData.username != "dinamo")
            {
                response.isOk = true;
                
            }
            else
            {
                response.userExist = true;
            }
            return response;
        }
        [HttpPost]
        [Route("/register-admin")]
        public ActionResult<RegisterUserResponse> RegisterAdmin([FromBody] UserData userData)
        {
            var response = new RegisterUserResponse();

            userData.isAdmin= true;
            if (userData.username != "dinamo")
            {
                response.isOk = true;

            }
            else
            {
                response.userExist = true;
            }
            return response;
        }

        [HttpGet]
        [Route("/wishlist")]
        public ActionResult<List<ProductData>> GetWishlistProducts(string username)
        {
            var products = new List<ProductData>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                stock = stockValue,
                sex = "M",
                size = "42",
                disc = true


            };
            products.Add(product1);

            return products;
        }
        [HttpGet]
        [Route("/basket")]
        public ActionResult<List<ProductData>> GetBasketProducts(string username)
        {
            var products = new List<ProductData>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                stock = stockValue,
                sex = "M",
                size = "42",
                disc = true


            };
            products.Add(product1);

            return products;
        }

        [HttpGet]
        [Route("/pattern")]
        public ActionResult<List<ProductData>> GetSearchedProducts(string pattern)
        {
            var products = new List<ProductData>();
            var stockValue = new List<ProductStock>();
            var stockValue1 = new ProductStock()
            {
                stock = "10",
                size = "42"
            };
            stockValue.Add(stockValue1);

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
                stock = stockValue,
                sex = "M",
                size ="42",
                disc = true


            };
            products.Add(product1);

            return products;
        }

        [HttpPost]
        [Route("/wishlist")]
        public ActionResult<WishlistResponse> AddItemToWishlist(string id, string username)
        {
            return new WishlistResponse()
            {
                isOk = true
            };

        }
        [HttpDelete]
        [Route("/wishlist")]
        public ActionResult<WishlistResponse> RemoveItemFromWishlist(string id, string username)
        {
            return new WishlistResponse()
            {
                isOk = true
            };
        }
        [HttpPost]
        [Route("/basket")]
        public ActionResult<BasketResponse> AddItemToBasket(string id, string username,string size)
        {
            return new BasketResponse()
            {
                isOk = true
            };
        }
        [HttpDelete]
        [Route("/basket")]
        public ActionResult<BasketResponse> RemoveItemFromBasket(string id, string username)
        {
            return new BasketResponse()
            {
                isOk = true
            };
        }

        [HttpDelete]
        [Route("/products")]
        public ActionResult <ProductsResponse> RemoveProduct(string id)
        {
            return new ProductsResponse() 
            { 
                isOk = true 
            };
            
        }

        [HttpPost]
        [Route("/products")]
        public ActionResult<ProductsResponse> AddProduct([FromBody]ProductDataDTO productData)
        {
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpPut]
        [Route("/products")]
        public ActionResult<ProductsResponse> UpdateProduct([FromBody]ProductDataDTO productData)
        {
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpPost]
        [Route("/newOrder")]
        public ActionResult<ProductsResponse> ExecuteOrder([FromBody] OrderDTO orderData)
        {
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpGet]
        [Route("/sizes")]
        public ActionResult<List<string>> GetProductSizes(string id)
        {
            var sizes=new List<string>();
            sizes.Add("");
            sizes.Add("S");
            sizes.Add("M");
            sizes.Add("L");

            return sizes;
        }
        [HttpPut]
        [Route("/password")]
        public ActionResult<string> UpdatePassword(string username, string password)
        {
            return "Ok";
        }

        [HttpPut]
        [Route("/info")]
        public ActionResult<string> UpdateUserInfo(string username, [FromBody] UpdateInfoRequest info)
        {
            return "Ok";
        }

        [HttpDelete]
        [Route("/cancel")]
        public ActionResult<string> CancelOrder(string username,string id)
        {
            return "Ok";
        }

        [HttpDelete]
        [Route("/return")]
        public ActionResult<string> ReturnProduct(string username, string idOrder, string idItem)
        {
            return username+" "+ idOrder + " "+idItem;
        }

    }
}

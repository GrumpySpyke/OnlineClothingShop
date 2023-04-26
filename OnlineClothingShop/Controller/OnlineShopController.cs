using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using OnlineClothingShop.Logic.Contracts;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;
using System.Xml.Linq;

namespace OnlineClothingShop.Controllers
{
    [Controller]
    [EnableCors("ShopAllowSpecificOrigins")]

   

    public class OnlineShopController : Controller
    {
        private IShopLogic _logic { get; set; }

        public OnlineShopController(IShopLogic logic)
        {
            _logic = logic;
        }

        [HttpGet] // tipul metodei (Get/ - list data 
                  // Post/ - insert
                  // Put/ -update
                  // Delete - stergere
                  // )
        [Route("/orders")]
        public ActionResult<List<OrderDTO>> GetOrders(string username)
        {

            //var ordersGood= _logic.GetOrders(username);

            var products = new List<ProductDataDTO>();

            var product1 = new ProductDataDTO()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = "105.99",
                sex = "M",
                size = "42",
                disc = true,
                isReturned=false

            };

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
            //var productsGood=_logic.GetFilteredProducts(filters);

            var products = new List<ProductData>();

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

            products.Add(product1);

            return products;

        }

        [HttpGet]
        [Route("/login")]
        public ActionResult<AuthenticateUserResponse> AuthenticateUser(string username, string password)
        {

            //var response = _logic.AuthenticateUser(username, password);

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

            //var responseGood = _logic.RegisterUser(userData);
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
            //var responseGood = _logic.RegisterUser(userData);
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
            //var response= _logic.GetWishlistItems(username);
            var products = new List<ProductData>();

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
            products.Add(product1);

            return products;
        }
        [HttpGet]
        [Route("/basket")]
        public ActionResult<List<ProductData>> GetBasketProducts(string username)
        {
            //var result = _logic.GetBasketItems(username);

            var products = new List<ProductData>();

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
            products.Add(product1);

            return products;
        }

        [HttpGet]
        [Route("/pattern")]
        public ActionResult<List<ProductData>> GetSearchedProducts(string pattern)
        {
            //var result = _logic.GetSearchedItems(pattern);

            var products = new List<ProductData>();

            var product1 = new ProductData()
            {
                id = 1,
                brand = "Gucci",
                category = "sosete",
                name = "Sosete Gucci Ultraboss",
                price = float.Parse("105.99"),
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
            //var response = _logic.AddItemToWishlist(id,username);

            return new WishlistResponse()
            {
                isOk = true
            };

        }
        [HttpDelete]
        [Route("/wishlist")]
        public ActionResult<WishlistResponse> RemoveItemFromWishlist(string id, string username)
        {
            //var response = _logic.RemoveItemFromWishlist(id,username);
            
            return new WishlistResponse()
            {
                isOk = true
            };
        }
        [HttpPost]
        [Route("/basket")]
        public ActionResult<BasketResponse> AddItemToBasket(string id, string username,string size)
        {
            //var response = _logic.AddItemToBasket(id, username, size);


            return new BasketResponse()
            {
                isOk = true
            };
        }
        [HttpDelete]
        [Route("/basket")]
        public ActionResult<BasketResponse> RemoveItemFromBasket(string id, string username,string size)
        {
            //var response = _logic.RemoveItemFromBasket(id,username,size);

            return new BasketResponse()
            {
                isOk = true
            };
        }

        [HttpDelete]
        [Route("/products")]
        public ActionResult <ProductsResponse> RemoveProduct(string id)
        {
            //var response = _logic.RemoveProduct(id);
            return new ProductsResponse() 
            { 
                isOk = true 
            };
            
        }

        [HttpPost]
        [Route("/products")]
        public ActionResult<ProductsResponse> AddProduct([FromBody]ProductDataDTO productData)
        {
            //var response= _logic.AddProduct(productData);
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpPut]
        [Route("/products")]
        public ActionResult<ProductsResponse> UpdateProduct([FromBody]ProductDataDTO productData)
        {
            //var response = _logic.UpdateProduct(productData);
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpPost]
        [Route("/newOrder")]
        public ActionResult<ProductsResponse> ExecuteOrder([FromBody] OrderDTO orderData)
        {
            //var response = _logic.ExecuteOrder(orderData);
            return new ProductsResponse()
            {
                isOk = true
            };
        }

        [HttpGet]
        [Route("/sizes")]
        public ActionResult<List<string>> GetProductSizes(string id)
        {
            //var response = _logic.GetProductSizes(id);

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
            //var response = _logic.UpdatePassword(username, password);
            return "Ok";
        }

        [HttpPut]
        [Route("/info")]
        public ActionResult<string> UpdateUserInfo(string username, [FromBody] UpdateInfoRequest info)
        {
            //var result = _logic.UpdateUserInfo(username, info);
            return "Ok";
        }

        [HttpDelete]
        [Route("/cancel")]
        public ActionResult<string> CancelOrder(string username,string id)
        {
            //var result = _logic.CancelOrder(username, id);

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

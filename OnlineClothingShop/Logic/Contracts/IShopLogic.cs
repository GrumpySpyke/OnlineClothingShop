using Microsoft.AspNetCore.Mvc;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using System.Drawing;

namespace OnlineClothingShop.Logic.Contracts
{
    public interface IShopLogic
    {
        public List<OrderDTO> GetOrders(string username);
        public List<ProductData> GetFilteredProducts(SearchFilters filters);
        public AuthenticateUserResponse AuthenticateUser(string username, string password);
        public RegisterUserResponse RegisterUser(UserData userData);
        public List<ProductData> GetWishlistItems(string username);
        public List<ProductData> GetBasketItems(string username);
        public List<ProductData> GetSearchedItems(string pattern);
        public WishlistResponse AddItemToWishlist(string id, string username);
        public WishlistResponse RemoveItemFromWishlist(string id, string username);
        public BasketResponse AddItemToBasket(string id, string username, string size);
        public BasketResponse RemoveItemFromBasket(string id, string username, string size);
        public ProductsResponse RemoveProduct(string id);
        public ProductsResponse AddProduct(ProductDataDTO productData);
        public ProductsResponse UpdateProduct(ProductDataDTO productData);
        public ProductsResponse ExecuteOrder(OrderDTO orderData);
        public List<string> GetProductSizes(string id);
        public bool UpdatePassword(string username, string password);
        public bool UpdateUserInfo(string username, UpdateInfoRequest info);
        public bool CancelOrder(string username, string id);
    }
}

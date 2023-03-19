using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using System.Data.SqlClient;

namespace OnlineClothingShop.Repository.Contracts
{
    public interface IDatabaseRepository
    {
        public SqlDataReader GetOrders(string username);
        public SqlDataReader GetOrderItems(string id);
        public SqlDataReader GetFilteredProducts(SearchFilters filters);
        public AuthenticateUserValues AuthenticateUser(string username, string password);
        public RegisterUserResponse InsertUser(UserData userData);
        public SqlDataReader GetWishlistData(string username);
        public SqlDataReader GetBasketData(string username);
        public SqlDataReader GetSearchedData(string pattern);
        public bool InsertItemToWishlist(string id,string username);
        public bool DeleteItemFromWishlist(string id, string username);
        public bool InsertItemToBasket(string id, string username, string size);
        public bool DeleteItemFromBasket(string id, string username, string size);
        public bool DeleteProduct(string id);
        public bool InsertProduct(ProductDataDTO productData);
        public bool UpdateProduct(ProductDataDTO productData);
        public bool InsertOrder(OrderDTO orderData);
        public SqlDataReader GetProductSizes(string id);
        public bool UpdatePassword(string username, string password);
        public bool UpdateUserInfo(string username, UpdateInfoRequest info);
        public bool CancelOrder(string username, string id);

    }
}

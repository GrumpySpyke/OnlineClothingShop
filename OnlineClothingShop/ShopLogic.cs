using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using OnlineClothingShop.Logic.Contracts;
using OnlineClothingShop.Mapper;
using OnlineClothingShop.Mapper.Contracts;
using OnlineClothingShop.Repository;
using OnlineClothingShop.Repository.Contracts;

namespace OnlineClothingShop
{
    public class ShopLogic : IShopLogic
    {
        private IObjectMapper _mapper;
        private IDatabaseRepository _repository;

        public ShopLogic(IObjectMapper mapper, IDatabaseRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public List<OrderDTO> GetOrders(string username)
        {
            var ordersData = _repository.GetOrders(username);

            var orders = _mapper.MapOrdersDataToDTO(ordersData);

            foreach (var order in orders)
            {
                var productsData = _repository.GetOrderItems(order.id.ToString());
                var products = _mapper.MapOrderItems(productsData);

                order.products = products;
            }

            return orders;
        }

        public List<ProductData> GetFilteredProducts(SearchFilters filters)
        {
            var productsData = _repository.GetFilteredProducts(filters);
            var products = _mapper.MapFilteredProducts(productsData);

            return products;
        }

        public AuthenticateUserResponse AuthenticateUser(string username, string password)
        {
            var response = new AuthenticateUserResponse();

            var authValues = _repository.AuthenticateUser(username, password); // apel la baza de date 
            response.isOk = authValues.isOk;
            if (authValues.isOk)
            {
                var userData = _mapper.MapUserData(authValues.data); // maparea datelor 
                response.userData = userData;
            }
            return response;
        }

        public RegisterUserResponse RegisterUser(UserData userData)
        {
            var response = new RegisterUserResponse();
            var ok = _repository.InsertUser(userData);

            response = ok;
            return response;
        }

        public List<ProductData> GetWishlistItems(string username)
        {
            var wishlistData = _repository.GetWishlistData(username);
            var wishlistItems = _mapper.MapFilteredProducts(wishlistData);

            return wishlistItems;
        }

        public List<ProductData> GetBasketItems(string username)
        {
            var basketData = _repository.GetBasketData(username);
            var basketItems = _mapper.MapFilteredProducts(basketData);

            return basketItems;
        }

        public List<ProductData> GetSearchedItems(string pattern)
        {
            var searchedData = _repository.GetSearchedData(pattern);
            var searchedItems = _mapper.MapFilteredProducts(searchedData);

            return searchedItems;
        }

        public WishlistResponse AddItemToWishlist(string id, string username)
        {
            var response = new WishlistResponse();
            var ok = _repository.InsertItemToWishlist(id, username);

            response.isOk = ok;

            return response;
        }

        public WishlistResponse RemoveItemFromWishlist(string id, string username)
        {
            var response = new WishlistResponse();
            var ok = _repository.DeleteItemFromWishlist(id, username);

            response.isOk = ok;

            return response;
        }

        public BasketResponse AddItemToBasket(string id, string username, string size)
        {
            var response = new BasketResponse();
            var ok=_repository.InsertItemToBasket(id,username,size);

            response.isOk = ok;

            return response;
        }

        public BasketResponse RemoveItemFromBasket(string id, string username, string size)
        {
            var response = new BasketResponse();
            var ok = _repository.InsertItemToBasket(id, username, size);

            response.isOk = ok;

            return response;
        }
        public ProductsResponse RemoveProduct(string id)
        {
            var response = new ProductsResponse();
            var ok = _repository.DeleteProduct(id);

            response.isOk = ok;

            return response;
        }

        public ProductsResponse AddProduct( ProductDataDTO productData)
        {
            var response = new ProductsResponse();
            var ok= _repository.InsertProduct(productData);

            response.isOk = ok;

            return response;
        }

        public ProductsResponse UpdateProduct(ProductDataDTO productData)
        {
            var response = new ProductsResponse();
            var ok = _repository.UpdateProduct(productData);

            response.isOk = ok;

            return response;
        }

        public ProductsResponse ExecuteOrder(OrderDTO orderData)
        {
            var response = new ProductsResponse();
            var ok = _repository.InsertOrder(orderData);

            response.isOk = ok;

            return response;
        }
        public List<string> GetProductSizes(string id)
        {
            var response = new List<string>();
            var sizesData = _repository.GetProductSizes(id);
            var sizes = _mapper.MapProductSizes(sizesData);

            response = sizes;

            return response;
        }

        public bool UpdatePassword(string username, string password)
        {
            return _repository.UpdatePassword(username,password);
        }

        public bool UpdateUserInfo(string username, UpdateInfoRequest info)
        {
            return _repository.UpdateUserInfo(username, info);
        }
        public bool CancelOrder(string username, string id)
        {
            return _repository.CancelOrder(username, id);
        }
    }
}

using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper.Contracts
{
    public interface IObjectMapper
    {
        public UserData MapUserData(SqlDataReader data);
        public List<ProductData> MapProductsData(SqlDataReader data);
        public List<OrderDTO> MapOrdersDataToDTO(SqlDataReader ordersData);
        public List<ProductDataDTO> MapOrderItems(SqlDataReader itemsData);
        public List<ProductData> MapFilteredProducts(SqlDataReader productsData);
        public List<string> MapProductSizes(SqlDataReader sizesData);
    }
}

using OnlineClothingShop.Entity;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper.Contracts
{
    public interface IObjectMapper
    {
        public UserData MapUserData(SqlDataReader data);
        public List<ProductData> MapProductsData(SqlDataReader data);
    }
}

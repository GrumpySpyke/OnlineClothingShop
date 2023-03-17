using OnlineClothingShop.Entity;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper.Contracts
{
    public interface IObjectMapper
    {
        public User MapUserData(SqlDataReader data);
        public List<Product> MapProductsData(SqlDataReader data);
    }
}

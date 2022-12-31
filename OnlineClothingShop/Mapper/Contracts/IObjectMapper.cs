using OnlineClothingShop.Entity;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper.Contracts
{
    public interface IObjectMapper
    {
        public Users MapUserData(SqlDataReader data);
        public List<Products> MapProductsData(SqlDataReader data);
    }
}

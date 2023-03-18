using OnlineClothingShop.Entity;
using OnlineClothingShop.Mapper.Contracts;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper
{
    public class ObjectMapper : IObjectMapper
    {
        public UserData MapUserData(SqlDataReader data)
        {
            data.Read();

            var user = new UserData
            {
                username = data["username"].ToString(),
                adress = data["adress"].ToString(),
                name = data["name"].ToString(),
                surname = data["surname"].ToString(),
                phone = data["phone"].ToString(),
                isAdmin= Boolean.Parse(data["isAdmin"].ToString())
            };

            return user;
        }

        public List<ProductData> MapProductsData(SqlDataReader data)
        {
            var products= new List<ProductData>();
            while (data.Read())
            {
                var product = new ProductData
                {
                    name = data["name"].ToString(),
                    id = Int32.Parse(data["id"].ToString()),
                    brand = data["brand"].ToString(),
                    price = float.Parse(data["price"].ToString()),
                    category = data["category"].ToString()
                };

                products.Add(product);
            }

            return products;
        }

    }
}

using OnlineClothingShop.Entity;
using OnlineClothingShop.Mapper.Contracts;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper
{
    public class ObjectMapper : IObjectMapper
    {
        public User MapUserData(SqlDataReader data)
        {
            data.Read();

            var user = new User
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

        public List<Product> MapProductsData(SqlDataReader data)
        {
            var products= new List<Product>();
            while (data.Read())
            {
                var product = new Product
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

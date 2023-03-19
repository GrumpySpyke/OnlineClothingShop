using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
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
                isAdmin= Boolean.Parse(data["isAdmin"].ToString()),
                email = data["email"].ToString(),
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

        public List<OrderDTO> MapOrdersDataToDTO(SqlDataReader data)
        {
            var orders = new List<OrderDTO>();
            while (data.Read())
            {
                var order = new OrderDTO
                {
                    id = Int32.Parse(data["id"].ToString()),
                    adress = data["adress"].ToString(),
                    dateIn= DateTime.Parse(data["dateIn"].ToString()).ToLongDateString(),
                    dateOut= DateTime.Parse(data["dateOut"].ToString()).ToLongDateString(),
                    phone= data["phone"].ToString(),
                    status= data["status"].ToString(),
                    username= data["username"].ToString(),
                    value= data["value"].ToString(),

                };

                orders.Add(order);
            }

            return orders;
        }

        public List<ProductDataDTO> MapOrderItems(SqlDataReader data)
        {
            var products = new List<ProductDataDTO>();
            while(data.Read())
            {
                var product = new ProductDataDTO()
                {
                    name = data["name"].ToString(),
                    brand = data["brand"].ToString(),
                    category = data["category"].ToString(),
                    disc = Boolean.Parse(data["disc"].ToString()),
                    id = Int32.Parse(data["id"].ToString()),
                    isReturned = Boolean.Parse(data["isReturned"].ToString()),
                    price = data["price"].ToString(),
                    sex = data["sex"].ToString(),
                    size = data["size"].ToString(),
                };
                products.Add(product);
            }

            return products;
        }

        public List<ProductData> MapFilteredProducts(SqlDataReader data)
        {
            var products = new List<ProductData>();
            while (data.Read())
            {
                var product = new ProductData()
                {
                    name = data["name"].ToString(),
                    brand = data["brand"].ToString(),
                    category = data["category"].ToString(),
                    disc = Boolean.Parse(data["disc"].ToString()),
                    id = Int32.Parse(data["id"].ToString()),
                    isReturned = Boolean.Parse(data["isReturned"].ToString()),
                    price = float.Parse(data["price"].ToString()),
                    sex = data["sex"].ToString(),
                    size = data["size"].ToString(),
                };
                products.Add(product);
            }

            return products;
        }

        public List<string> MapProductSizes(SqlDataReader data)
        {
            var sizes=new List<string>();
            while(data.Read())
            {
                sizes.Add(data["size"].ToString()); 
            }

            return sizes;
        }

    }
}

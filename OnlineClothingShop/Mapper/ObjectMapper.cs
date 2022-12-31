using OnlineClothingShop.Entity;
using OnlineClothingShop.Mapper.Contracts;
using System.Data.SqlClient;

namespace OnlineClothingShop.Mapper
{
    public class ObjectMapper : IObjectMapper
    {
        public Users MapUserData(SqlDataReader data)
        {
            data.Read();

            var user = new Users
            {
                username = data["username"].ToString(),
                adresa = data["adresa"].ToString(),
                nume = data["nume"].ToString(),
                prenume = data["prenume"].ToString(),
                puncte = float.Parse(data["puncte"].ToString()),
                telefon = data["telefon"].ToString(),
                type = Int32.Parse(data["type"].ToString())
            };

            return user;
        }

        public List<Products> MapProductsData(SqlDataReader data)
        {
            var products= new List<Products>();
            while (data.Read())
            {
                var product = new Products
                {
                    denumire = data["denumire"].ToString(),
                    idProdus = Int32.Parse(data["idProdus"].ToString()),
                    marca = data["marca"].ToString(),
                    pret = float.Parse(data["pret"].ToString()),
                    tip = Int32.Parse(data["tip"].ToString())
                };

                products.Add(product);
            }

            return products;
        }

    }
}

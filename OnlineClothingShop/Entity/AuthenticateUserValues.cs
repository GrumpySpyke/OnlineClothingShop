using System.Data.SqlClient;

namespace OnlineClothingShop.Entity
{
    public class AuthenticateUserValues
    {
        public bool isOk { get; set; }
        public SqlDataReader data { get; set; }

    }
}

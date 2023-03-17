using Microsoft.Extensions.Options;
using OnlineClothingShop.Configuration;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Mapper;
using OnlineClothingShop.Mapper.Contracts;
using OnlineClothingShop.Repository.Contracts;
using System.Data.SqlClient;

namespace OnlineClothingShop.Repository
{
    public class DatabaseRepository : IDatabaseRepository
    {
        private DatabaseOptions _databaseOptions;
        private IObjectMapper _objectMapper;
        public DatabaseRepository(DatabaseOptions databaseOptions,IObjectMapper objectMapper)
        {
            _databaseOptions = databaseOptions;
            _objectMapper = objectMapper;
        }
        public DatabaseRepository(IOptions<DatabaseOptions> databaseOptions, IObjectMapper objectMapper)
        : this(databaseOptions.Value,objectMapper) { }



        #region public methods
        public bool AuthenticateUser(string username, string password)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select username,password from Utilizatori where username='" + username + "' AND password='" + password + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            if (data.Read())
            {
                CloseConnection(connection);
                return true;
            }
            CloseConnection(connection);
            return false;
        }

        public User GetUserData(string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Utilizatori where username='" + username + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            var user = _objectMapper.MapUserData(data);

            CloseConnection(connection);
            return user;
        }

        public List<Product> GetAllProductsData()
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Produse";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            var products = _objectMapper.MapProductsData(data);

            CloseConnection(connection);
            return products;
        }
        #endregion

        #region private methdos
        private SqlConnection OpenConnection()
        {
            var connection = new SqlConnection(_databaseOptions.connectionString);
            connection.Open();
            return connection; 
        }
        private void CloseConnection( SqlConnection connection)
        {
            connection.Close();
        }
    }
    #endregion
}
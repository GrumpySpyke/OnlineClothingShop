using Microsoft.Extensions.Options;
using OnlineClothingShop.Configuration;
using OnlineClothingShop.Entity;
using OnlineClothingShop.Entity.DTO;
using OnlineClothingShop.Entity.Request;
using OnlineClothingShop.Entity.Response;
using OnlineClothingShop.Mapper;
using OnlineClothingShop.Mapper.Contracts;
using OnlineClothingShop.Repository.Contracts;
using System.Data.SqlClient;
using System.Drawing;

namespace OnlineClothingShop.Repository
{
    public class DatabaseRepository : IDatabaseRepository
    {
        private DatabaseOptions _databaseOptions;
        private IObjectMapper _objectMapper;
        public DatabaseRepository(DatabaseOptions databaseOptions, IObjectMapper objectMapper)
        {
            _databaseOptions = databaseOptions;
            _objectMapper = objectMapper;
        }
        public DatabaseRepository(IOptions<DatabaseOptions> databaseOptions, IObjectMapper objectMapper)
        : this(databaseOptions.Value, objectMapper) { }



        #region public methods
        public AuthenticateUserValues AuthenticateUser(string username, string password)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select username,password from Users where username='" + username + "' AND password='" + password + "'";

            command.Connection = connection;
            command.CommandText = query;

            var response = new AuthenticateUserValues();
            var data = command.ExecuteReader();

            if (!data.Read())
            {
                response.isOk = false;

                CloseConnection(connection);
                return response;
            }

            response.isOk = true;
            response.data = data;

            CloseConnection(connection);
            return response;
        }

        public UserData GetUserData(string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Users where username='" + username + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            var user = _objectMapper.MapUserData(data);

            CloseConnection(connection);
            return user;
        }

        public List<ProductData> GetAllProductsData()
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

        public SqlDataReader GetOrders(string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Orders where username='" + username + "' ORDER BY id DESC";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public SqlDataReader GetOrderItems(string id) {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from OrderItems where idOrder='" + id + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public SqlDataReader GetFilteredProducts(SearchFilters filters)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = GetFilteredQuery(filters);

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public RegisterUserResponse InsertUser(UserData userData)
        {
            var response = new RegisterUserResponse();

            try
            {
                var connection = OpenConnection();
                var command = new SqlCommand();
                var query = "INSERT into Users(username,password,adress,isAdmin,email,name,surname,phone)";
                query += " VALUES('" + userData.username + "', '" + userData.password + "', '" + userData.adress + "', '" +
                    userData.isAdmin.ToString() + "', '" + userData.email + "', '" + userData.name + "', '" + userData.surname + "', '" + userData.phone + "')";

                command.Connection = connection;
                command.CommandText = query;

                var data = command.ExecuteNonQuery();

                if (data > 0)
                {
                    response.isOk = true;

                }
                else
                {
                    response.userExist = true;
                }
                return response;
            }
            catch (Exception ex)
            {
                response.userExist = false;
                response.isOk = false;
                return response;
            }
        }

        public SqlDataReader GetWishlistData(string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Wishlist where username='" + username + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public SqlDataReader GetBasketData(string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Basket where username='" + username + "'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public SqlDataReader GetSearchedData(string pattern)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Select * from Products where name LIKE '%" + pattern + "%'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteReader();

            CloseConnection(connection);
            return data;
        }

        public bool InsertItemToWishlist(string id, string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Insert into Wishlist(username,id)";
            query += " VALUES('" + username + "', '"+id + "')";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if(data>0)
            {
                CloseConnection(connection);
                return true;
            }

            CloseConnection(connection);
            return false;
        }

        public bool DeleteItemFromWishlist(string id, string username)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Delete from Wishlist where username='" + username + "' AND id='" + id + "'";

            command.Connection = connection;
            command.CommandText = query;
            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;
            }

            CloseConnection(connection);
            return false;
        }

        public bool InsertItemToBasket(string id, string username, string size)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query= "Insert into Basket(username,id,size)";
            query += " VALUES('" + username + "', '" + id +"', '"+size+ "')";

            command.Connection = connection;
            command.CommandText = query;
            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;
            }

            CloseConnection(connection);
            return false;
        }

        public bool DeleteItemFromBasket(string id, string username,string size)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Delete from Basket where username='" + username + "' AND id='" + id + "' AND size='"+ size+"'";

            command.Connection = connection;
            command.CommandText = query;
            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;
            }

            CloseConnection(connection);
            return false;
        }

        public bool DeleteProduct(string id)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "Delete from Products whereid='" + id +"'";

            command.Connection = connection;
            command.CommandText = query;
            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;
            }

            CloseConnection(connection);
            return false;
        }

        public bool InsertProduct(ProductDataDTO productData)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = "INSERT into Products(,brand,category,price,sex,disc)";
            query += " VALUES('"+ productData.brand + "', '" + productData.category + "', '" +
                float.Parse(productData.price) + "', '" + productData.sex + "', '" + productData.disc + "')";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;

            }
            else
            {
                CloseConnection(connection);
                return false;
            }

        }

        public bool UpdateProduct(ProductDataDTO productData)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Update Products SET brand='{productData.brand}',category='{productData.category}',price='{float.Parse(productData.price)}'" +
                $",sex='{productData.sex}',disc='{productData.disc}' where id='{productData.id}')";


            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                CloseConnection(connection);
                return true;

            }
            else
            {
                CloseConnection(connection);
                return false;
            }
        }

        public bool InsertOrder(OrderDTO orderData)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Insert into Orders(username,adress,status,phone,value) VALUES('{orderData.username}','" +
                $"{orderData.adress}','InDeposit','{orderData.phone}','{orderData.value}'";

            command.Connection= connection;
            command.CommandText = query;

            var id = (int)command.ExecuteScalar();
            if(id > 0)
            {

                var data=InsertOrderItems(id, orderData);
                if(data)
                {
                    CloseConnection(connection);
                    return true;
                }
                else
                {
                    CloseConnection(connection);
                    return false;
                }
            }
            CloseConnection(connection);
            return false;
        }

        public SqlDataReader GetProductSizes(string id)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Select * from ProductSizes where id='{id}'";

            command.Connection = connection;
            command.CommandText= query;

            var data = command.ExecuteReader();

            return data;
        }

        public bool UpdatePassword(string username, string password)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Update Users set password='{password}' where username='{username}'";
            
            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if(data>0)
            {
                return true;
            }
            return false;

        }

        public bool UpdateUserInfo(string username, UpdateInfoRequest info)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Update Users set adress='{info.adress}', phone='{info.phone}', email={info.email} where username='{username}'";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                return true;
            }
            return false;
        }

        public bool CancelOrder(string username, string id)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            var query = $"Update Orders set status='Anulat' where username='{username}' AND id={id}";

            command.Connection = connection;
            command.CommandText = query;

            var data = command.ExecuteNonQuery();

            if (data > 0)
            {
                return true;
            }
            return false;
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

        private string GetFilteredQuery(SearchFilters filters)
        {
            var query = "Select * from Products where sex='"+filters.sex+"'";
            if (filters.brand != null)
            {
                query=query+" AND brand='"+filters.brand+"'";
            }
            if (filters.category != null)
            {
                query = query + " AND category='" + filters.category + "'";
            }
            if (filters.priceMin != null)
            {
                query = query + " AND price > '" + filters.priceMin + "'";
            }
            if (filters.priceMax != null)
            {
                query = query + " AND price < '" + filters.priceMax + "'";
            }
            return query;
        }

        private bool InsertOrderItems(int id, OrderDTO orderData)
        {
            var connection = OpenConnection();
            var command = new SqlCommand();
            command.Connection = connection;
            foreach (var product in orderData.products)
            {
                var query = $"Insert into OrderItems(idOrder,id,size) Values('{id}','{product.id}','{product.size}'";

                command.CommandText= query;

                var data=command.ExecuteNonQuery();

                if(!(data>0))
                {
                    return false;
                }
            }

            return true;
        }
    }
    #endregion
}
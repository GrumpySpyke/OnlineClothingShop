namespace OnlineClothingShop.Entity.Response
{
    public class AuthenticateUserResponse
    {
        public bool isOk { get; set; }
        public UserData userData { get; set; }
    }
}

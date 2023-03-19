namespace OnlineClothingShop.Entity.DTO
{
    public class ProductDataDTO
    {
        public int id { get; set; }
        public string brand { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        //public List<ProductStock> stock { get; set; }
        public string price { get; set; }
        public string sex { get; set; }
        public string size { get; set; }
        public bool disc { get; set; }
        public bool isReturned { get; set; }
    }
}

namespace OnlineClothingShop.Entity
{
    public class Product
    {
        public int id { get; set; }
        public string brand { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public List<ProductStock> stock { get; set; }
        public float price { get; set; }
        public string sex { get; set; }
    }

    public class ProductStock
    {
        public string size;
        public string stock;
    }
}

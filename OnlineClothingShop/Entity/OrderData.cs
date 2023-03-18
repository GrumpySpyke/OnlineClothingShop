namespace OnlineClothingShop.Entity
{
    public class OrderData
    {
        public string username { get; set; }
        public int id { get; set; }
        public string adress { get; set; }
        public List<ProductData> products { get; set; }
        public DateTime dateIn { get; set; }
        public DateTime dateOut { get; set; }

        public string status { get; set; }

        public string phone { get; set; }
        public string value { get; set; }

    }
}

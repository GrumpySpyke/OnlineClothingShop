namespace OnlineClothingShop.Entity.DTO
{
    public class OrderDTO 
    { 
    public string username { get; set; }
    public int id { get; set; }
    public string adress { get; set; }
    public List<ProductDataDTO> products { get; set; }
    public string dateIn { get; set; }
    public string dateOut { get; set; }

    public string status { get; set; }

    public string phone { get; set; }

    public string value { get; set; }
    }
}

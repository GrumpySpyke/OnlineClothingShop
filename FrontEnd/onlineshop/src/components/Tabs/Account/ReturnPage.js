import BasketItem from "../Basket/BasketItem";
import { useState } from "react";
import OrderPage from "./OrderPage";
function ReturnPage({order,handleClickX}){

    const account = {
        name: "Patrascu",
        surname: "Armand",
        adress: "Strada Lunga 315",
        phone: "074215215",
        email: "bossDboss@gmail.com"
    }

    const isReturn=true;
    const [name, setName] = useState(account.name);
    const [surname, setSurname] = useState(account.surname);
    const [adress, setAdress] = useState(account.adress);
    const [phone, setPhone] = useState(account.phone);
    const [email, setEmail] = useState(account.email);
    const [totalPrice, setTotalPrice] = useState(0);

    const items = [{ name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 100, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 200, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 400, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 500, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 600, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 700, disc: false, size: "M" }];


    order.items=items;

    let orderContent=order.items.map((item)=>{
        return <BasketItem isReturn={true} isOrder={false} item={item}/>
    })

    return<div>
        <div className="inline-flex">
        <OrderPage order={order} handleClickX={handleClickX} isReturn={true}/>
        <div className="grid">
        {orderContent}
        </div>
        </div>
    </div>
}

export default ReturnPage;
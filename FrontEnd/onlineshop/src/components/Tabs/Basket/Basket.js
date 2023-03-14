import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import BasketItem from "./BasketItem";

function Basket({ handleCloseBasket,items}) {


    const [itemsDisplay,setItemsDisplay]=useState(items);
    const account = {
        name: "Patrascu",
        surname: "Armand",
        adress: "Strada Lunga 315",
        phone: "074215215",
        email: "bossDboss@gmail.com"
    }

  
    const [name, setName] = useState(account.name);
    const [surname, setSurname] = useState(account.surname);
    const [adress, setAdress] = useState(account.adress);
    const [phone, setPhone] = useState(account.phone);
    const [email, setEmail] = useState(account.email);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleDeleteProduct = (item) => {
        console.log("ok");
        console.log(item);
        const index=items.indexOf(item);
        items.splice(index,1)
        console.log(itemsDisplay);

    }

    const onFinishOrder = () => {
        handleCloseBasket();
        console.log(name,surname,adress,phone,email,items);
    }

    let price = 0;
    let basketContent;
    basketContent = items.map((item) => {
        return <BasketItem item={item} handleDeleteProduct={handleDeleteProduct} />
    })
    useEffect(() => {

        items.map((item) => {

            console.log("pretProdus:", item.price);
            price = price + item.price;
            console.log("Total:", price);

        })
        console.log("i fire once")
        setTotalPrice(price);
        
    }, [itemsDisplay])

    



    return <div>
        <div className="inline-flex">

            <div className="overflow">
                {basketContent}
            </div>

            <div className="ml-64">
                <div className="grid">
                    <div className="text-6xl center">
                        <label>
                            Finalizeaza Comanda
                        </label>
                    </div>
                    <div className="text-4xl">
                        <label>
                            Nume:
                        </label>
                        <input className="border-4 border-sky-300 rounded-full mt-3" value={name} onChange={(event) => { setName(event.target.value) }}>
                        </input>
                    </div>
                    <div className="text-4xl">
                        <label>
                            Prenume:
                        </label>
                        <input className="border-4 border-sky-300 rounded-full mt-3" value={surname} onChange={(event) => { setSurname(event.target.value) }}>
                        </input>
                    </div>
                    <div className="text-4xl">
                        <label>
                            Adresa:
                        </label>
                        <input className="border-4 border-sky-300 rounded-full mt-3" value={adress} onChange={(event) => { setAdress(event.target.value) }}>
                        </input>
                    </div>
                    <div className="text-4xl">
                        <label>
                            Telefon:
                        </label>
                        <input className="border-4 border-sky-300 rounded-full mt-3" value={phone} onChange={(event) => { setPhone(event.target.value) }}>
                        </input>
                    </div>
                    <div className="text-4xl">
                        <label>
                            Email:
                        </label>
                        <input className="border-4 border-sky-300 rounded-full mt-3" value={email} onChange={(event) => { setEmail(event.target.value) }}>
                        </input>
                    </div>

                </div>
                <div className="mt-64">
                    <div className="text-4xl">
                        <label>
                            Total: {totalPrice}
                        </label>
                    </div>
                    <div className="w-64">
                        <button className="button is-primary" style={{ marginLeft: 0, width: 550 }} onClick={() => onFinishOrder()}>Finalizeaza</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Basket;
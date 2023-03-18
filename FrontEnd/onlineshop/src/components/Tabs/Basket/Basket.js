import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getBasket, removeItemFromBasket, executeOrder } from "../../../services/database-client";
import BasketItem from "./BasketItem";

function Basket({ accountData }) {


    const [items, setItems] = useState([]);
    const [name, setName] = useState(accountData.name);
    const [surname, setSurname] = useState(accountData.surname);
    const [adress, setAdress] = useState(accountData.adress);
    const [phone, setPhone] = useState(accountData.phone);
    const [email, setEmail] = useState(accountData.email);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showOk, setShowOk] = useState(false);
    useEffect(() => {
        getBasket(accountData.username).then((res) => {
            console.log(res.data);
            setItems(res.data);
            let price = 0;
            res.data.map((item) => {
                price = price + item.price;
            })

            setTotalPrice(price);
        });
    }, [])


    const handleDeleteProduct = (item) => {
        removeItemFromBasket(item.id, accountData.username)
            .then((res) => {
                console.log(res.data);
            })
    }

    const onFinishOrder = () => {
        
        console.log(name, surname, adress, phone, email, items, totalPrice);
        executeOrder({ name: name, surname: surname, adress: adress, phone: phone, email: email, products: items, username: accountData.username, price: totalPrice })
            .then((res) => {
                console.log(res.data);
                setShowOk(true);
            })
    }

    let okContent=null;
    let content = <div className="inline-flex">

        <div className="overflow">
            {items.length > 0 && items.map((item) => (
                <BasketItem item={item} handleDeleteProduct={handleDeleteProduct} isOrder={false}/>
            ))}
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

    if (showOk) {
        content=null;
        okContent =<div className="text-5xl text-green-500">Comanda executata cu success!</div>
    }
    return <div>
        {content}
        {okContent}
    </div>
}

export default Basket;
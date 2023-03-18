import BasketItem from "../Basket/BasketItem";
import { useState } from "react";
import OrderPage from "./OrderPage";
import { returnItem } from "../../../services/database-client";
function ReturnPage({username,order,handleClickX}){

    const handleReturn=(idItem)=>{
        console.log(idItem);
        console.log(order.id)
        returnItem(username,order.id,idItem)
        .then((res)=>{
            console.log(res.data)
        })
    }

    let orderContent=order.products.map((item)=>{
        return <BasketItem isReturn={true} isOrder={false} item={item} handleReturn={handleReturn}/>
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
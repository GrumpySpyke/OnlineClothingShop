import { GoX } from "react-icons/go"
import { GiReturnArrow } from "react-icons/gi"
import { useState } from "react"
import {classNames} from "classnames";
function OrderEntry({ order, handleShowOrder,handleShowReturnOrder}) {
    const [hoverReturn, setHoverReturn] = useState(false);
    const [showOrder, setShowOrder] = useState(false);

    const handleClick = () => {
        console.log(order)
    }

    let returnButtonContent = null;
    let statusContent = null;
    let viewButtonContent =   <button className="button is-primary" style={{ marginLeft: 130, marginTop: 10 }} onClick={() => handleShowOrder(order)}>Vizualizeaza comanda</button>
    switch (order.status) { 
        case "InDeposit":
            statusContent=  <label className="ml-4 text-xl mt-4 text-blue-500"
            >Status: {order.status}
            </label>
            break;
        case "Delivering":
            statusContent=  <label className="ml-4 text-xl mt-4 text-amber-300"
            >Status: {order.status}
            </label>
            break;
        case "Delivered":
            statusContent=  <label className="ml-4 text-xl mt-4 text-green-500"
            >Status: {order.status}
            </label>
            break;
            case "Returned":
            statusContent=  <label className="ml-4 text-xl mt-4 text-teal-300"
            >Status: {order.status}
            </label>
            viewButtonContent=null;
            break;
    }
    if (order.status == "Delivered") {
        returnButtonContent = <div>
            <button
                className="ml-72 mt-16"
                onMouseEnter={() => { setHoverReturn(true) }}
                onMouseLeave={() => { setHoverReturn(false) }}
                onClick={()=>handleShowReturnOrder(order)}
            >
                <GiReturnArrow size={25} />
            </button>
            {hoverReturn && (<div className="border-red-500 bg-yellow-500 text-right text-white">Returneaza produse</div>)}
        </div>
    }
    return <div>
        <div className="mt-6 ml-64">
            <div className="border-8 py-4 px-2 border-green-400 inline-flex w-2/3 mb-4">

                <div className="grid w-1/2">
                    <label className="ml-4 text-xl h-1">
                        Id: {order.id}
                    </label>
                    <label className="ml-4 text-xl mt-4 "
                    >Adresa: {order.adress}
                    </label>
                    
                    <div className="grid inline-flex">
                        <label className="ml-4 mt-4 text-xl h-1 "
                        >Data Emiterii: {order.dateIn}
                        </label>
                        <label className="ml-4 mt-4 text-xl h-1 "
                        >Data Indeplinirii: {order.dateOut}
                        </label>
                        <label className="ml-4 mt-4 mb-4 text-xl h-1 "
                        >Valoare: {order.value}RON
                        </label>
                    </div>
                    {statusContent}
                </div>
                <div className="ml-48">
                    <div className="grid">
                        {/* <button className="delete" style={{ marginLeft: 2 }} onClick={() => setSize("")}></button> */}
                      {viewButtonContent}
                    </div>
                    {returnButtonContent}

                </div>
            </div>
        </div>
    </div >
}

export default OrderEntry
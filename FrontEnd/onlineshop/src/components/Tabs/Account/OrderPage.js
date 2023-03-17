import { GoX } from "react-icons/go"
import BasketItem from "../Basket/BasketItem";
function OrderPage({ order, handleClickX,isReturn}) {

    let cancelButtonContent = null;

    const products = [{ name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 100, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 200, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 400, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 500, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
    { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 600, disc: true, size: "M" },
    { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 700, disc: false, size: "M" }];

    order.products = products;

    const onClickX = () => {
        console.log(order);
        handleClickX();
    }

    const onClickCancel = () => {
        handleClickX();
    }

    
    let orderContent = order.products.map((item) => {
        return <BasketItem item={item} isReturn={false} isOrder={true}/>
    })

    if(isReturn){
        orderContent=null;
    }

    if (order.status !== "Delivered") {
        cancelButtonContent = <div>
            <button className="ml-28 mt-64 border-4 bg-red-500 w-64 h-16 border-gray-600 text-white"
                onClick={onClickCancel}>
                Anuleaza Comanda
            </button>
        </div>
    }
    return <div className="">
        <div className="inline-flex">
            <div className="ml-24">
                <button
                    className=""
                    onClick={() => onClickX()}
                >
                    <GoX size={50} />
                </button>
                <div className="mt-5 ml-6">
                    <div className="grid ">
                        <label className="ml-4 text-3xl h-1">
                            Id Comanda: {order.id}
                        </label>
                        <label className="ml-4 mt-8 text-3xl">
                            Adresa: {order.adress}
                        </label>
                        <label className="ml-4 text-3xl mt-8 ">
                            Contact: {order.phone}
                        </label>
                        <div className="grid inline-flex">
                            <label className="ml-4 mt-8 text-3xl h-1 "
                            >Data Emiterii: {order.dateIn}
                            </label>
                            <label className="ml-4 mt-8 text-3xl h-1 "
                            >Data Indeplinirii: {order.dateOut}
                            </label>
                            <label className="ml-4 mt-8 mb-4 text-3xl h-1 "
                            >Valoare: {order.value}RON
                            </label>
                        </div>
                    </div>
                </div>
                {cancelButtonContent}
            </div>
            <div className="grid ml-24">
                {orderContent}
            </div>
        </div>
    </div>
}

export default OrderPage;
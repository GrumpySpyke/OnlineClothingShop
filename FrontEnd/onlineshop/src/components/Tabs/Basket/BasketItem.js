import { GoX } from "react-icons/go";
import { GiReturnArrow } from "react-icons/gi"
function BasketItem({ item, handleDeleteProduct, isReturn, isOrder }) {


    let priceContent = null;
    let buttonContent;

    if (isReturn) {
        buttonContent = <div className="ml-96 mt-">
            <div className="grid">
                <button
                    onClick={() => { handleDeleteProduct() }}>
                    <GiReturnArrow size={50} className="top" />
                </button>

            </div>


        </div>
    }

    if (!isReturn && !isOrder) {
        buttonContent = <div className="ml-96 mt-">
            <div className="grid">
                <button
                    onClick={() => handleDeleteProduct(item)}>
                    <GoX size={50} className="top" />
                </button>
            </div>
        </div>
    }

    switch (item.disc) {
        case true:
            priceContent = <label className="ml-4 mt-4 mb-4 text-xl h-1 text-red-500 "
            >Valoare: {item.price}RON
            </label>
            break;
        case false:
            priceContent = <label className="ml-4 mt-4 mb-4 text-xl h-1"
            >Valoare: {item.price}RON
            </label>
    }

    return <div>

        <div className="mt-6 ml-16 w-full">
            <div className="border-8 py-4 px-2 border-green-400 inline-flex w-full mb-4">
                <img
                    src="https://picsum.photos/200/200">
                </img>
                <div className="grid w-1/2">

                    <label className="ml-4 text-xl h-1">
                        Nume: {item.name}
                    </label>
                    <label className="ml-4 text-xl "
                    >Marca: {item.brand}
                    </label>

                    <div className="grid inline-flex">
                        <label className="ml-4 mt-4 text-xl h-1 "
                        >Marime: {item.size}
                        </label>
                        {priceContent}
                    </div>
                    {buttonContent}
                </div>

            </div>
        </div>
    </div>
}

export default BasketItem;
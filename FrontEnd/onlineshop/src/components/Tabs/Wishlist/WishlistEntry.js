import { useState } from "react";
import { GoX } from "react-icons/go";
import { removeItemFromWishlist } from "../../../services/database-client";
function WishlistEntry({ username,product,handleImgClick,handleRefresh}) {
    const [hoverDelete, setHoverDelete] = useState(false);

    const onClickDelete = () => {
        removeItemFromWishlist(product.id,username)
        .then((res)=>{
            console.log(res.data);
        })
        handleRefresh();
    }
    let priceContent=null;
    switch (product.disc) {
        case true:
            priceContent = <label className="ml-4 mt-4 mb-4 text-xl h-1 text-red-500 "
            >Valoare: {product.price}RON
            </label>
            break;
        case false:
            priceContent = <label className="ml-4 mt-4 mb-4 text-xl h-1"
            >Valoare: {product.price}RON
            </label>
    }

    return <div className="mt-6 ml-64">
        <div className="border-8 py-2 px-2 border-sky-400 inline-flex w-2/3">
            <div>
                <img src="https://picsum.photos/seed/150/150" 
                onClick={()=>handleImgClick(product)} />
            </div>
            <div className="grid w-1/2">
                <label className="ml-4 text-xl h-1">
                    Nume:{product.name}
                </label>
                <label className="ml-4 mt-4 text-xl h-1 mb-8">Marca: {product.brand}</label>
                {priceContent}
            </div>
            <div className="ml-24">
                <button
                    className="ml-64 mt-12"
                    onMouseEnter={() => { setHoverDelete(true) }}
                    onMouseLeave={() => { setHoverDelete(false) }}
                    onClick={onClickDelete}>
                    <GoX size={25} />
                </button>
                {hoverDelete && (<div className="border-red-500 bg-red-500 text-right text-white">Elimina produs</div>)}
            </div>
        </div>
    </div>
}

export default WishlistEntry
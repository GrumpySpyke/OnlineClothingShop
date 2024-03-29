import { useState } from "react";
import Product from "./Product";
import { GoHeart, GoX } from 'react-icons/go';
import { addItemToWishlist, removeProduct } from "../../../services/database-client";

function ProductView({ product,handleImageClick, isAdmin,username}) {

    const [hoverWishlist, setHoverWishlist] = useState(false);
    const [hoverDelete, setHoverDelete] = useState(false);

    const onClickDelete = () => {
        removeProduct(product.id,)
        .then((res)=>{
            console.log(res.data);
        })
    }

    const addToWishlist=()=>{
        addItemToWishlist(product.id,username)
        .then((res)=>{
            console.log(res.data);
        })
    }

    let content;

    let priceContent = <div>
        <label style={{ float: "right" }}>{product.price} RON</label>
    </div>

    let adminButton = <button
        onMouseEnter={() => { setHoverDelete(true) }}
        onMouseLeave={() => { setHoverDelete(false) }}
        onClick={onClickDelete}>
        <GoX size={25} />
    </button>

    if (!isAdmin) {
        adminButton = null;
    }
    if (product.disc) {
        priceContent = <div>
            <label style={{ float: "right" }} className="text-red-500">{product.price} RON</label>
        </div>
    }
    content = <div className="book-show">
        {isAdmin && adminButton}
        <div className="inline-flex">
            

            <button style={{float:"right", marginLeft:20}}>
                <GoHeart size={25}
                    onMouseEnter={() => { setHoverWishlist(true) }}
                    onMouseLeave={() => { setHoverWishlist(false) }}
                    onClick={() => {addToWishlist() }}
                    className="ml-56" />
            </button>

        </div>
        <div>
            {hoverDelete && (<div className="border-red-500 bg-red-500 text-left text-white">Elimina produs</div>)}
            {hoverWishlist && (<div className="border-green-300 bg-green-300 text-right">Adauga in Wishlist</div>)}
        </div>
        <img
            src="https://picsum.photos/seed/200/200"
            onClick={()=>handleImageClick(product)}
            className="border-2 border-black"
        />
        <div className="mt-2">
            <label style={{ fontSize: 12, height: 75 }} />
            {product.name}
            {priceContent}
        </div>

    </div>

    return <>
        {content}

    </>
}

export default ProductView
import { useState } from "react";
import Product from "./Product";
import { GoHeart, GoX } from 'react-icons/go';

function ProductView({ name, price, handleImageClick, disc, isAdmin, handleClickDelete }) {

    const [hoverWishlist, setHoverWishlist] = useState(false);
    const [hoverDelete, setHoverDelete] = useState(false);
    const [showProduct, setShowProduct] = useState(false);

    const onClickDelete = () => {
        handleClickDelete(name);
    }

    let content;

    let priceContent = <div>
        <label style={{ float: "right" }}>{price} RON</label>
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
    if (disc) {
        priceContent = <div>
            <label style={{ float: "right" }} className="text-red-500">{price} RON</label>
        </div>
    }
    content = <div className="book-show">
        <div className="inline-flex">
            {isAdmin && adminButton}

            <button>
                <GoHeart size={25}
                    onMouseEnter={() => { setHoverWishlist(true) }}
                    onMouseLeave={() => { setHoverWishlist(false) }}
                    onClick={() => { console.log(isAdmin) }}
                    className="ml-52" />
            </button>

        </div>
        <div>
            {hoverDelete && (<div className="border-red-500 bg-red-500 text-left text-white">Elimina produs</div>)}
            {hoverWishlist && (<div className="border-green-300 bg-green-300 text-right">Adauga in Wishlist</div>)}
        </div>
        <img
            src="https://picsum.photos/seed/200/200"
            onClick={handleImageClick}
            className="border-2 border-black"
        />
        <div className="mt-2">
            <label style={{ fontSize: 12, height: 75 }} />
            {name}
            {priceContent}
        </div>

    </div>

    return <>
        {content}

    </>
}

export default ProductView
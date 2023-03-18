import WishlistEntry from "./WishlistEntry";
import "../../../index.css";
import { useState } from "react";
import Product from "../Products/Product";
import { GoX } from "react-icons/go";
import { useEffect } from "react";
import { getWishlist } from "../../../services/database-client";
function Wishlist({ username}) {

    const [showProduct, setShowProduct] = useState(false);
    const [currentProduct, setCurrentProduct] = useState();
    const [products, setProducts] = useState([]);
    const [refresh,setRefresh]=useState(false);
    let wishlistContent;
    useEffect(() => {
        getWishlist(username)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
    }, [refresh])

    const closeProduct = () => {
        setShowProduct(false);
    }

    const handleImgClick = (product) => {
        console.log(product);
        setCurrentProduct(product);
        setShowProduct(true);
    }

    const handleRefresh=()=>{
        setRefresh(!refresh)
    }

    wishlistContent = products.map((product) => {
        return <WishlistEntry username={username} product={product} handleImgClick={handleImgClick} handleRefresh={handleRefresh}/>
    })


    let productContent = null;

    if (showProduct) {
        wishlistContent = null;
        productContent = <div>
            <div className="flex">

                <div className="border-8 ml-8 mt-8 border-black ">
                    <button
                        onClick={closeProduct}>
                        <GoX size={50} className="top" />
                    </button>
                    <Product product={currentProduct} onClose={closeProduct} username={username} isWishlistItem={true}/>
                </div>
            </div>
        </div>
    }
    return <div className="content-center">
        {wishlistContent}
        {productContent}
    </div>
}

export default Wishlist;
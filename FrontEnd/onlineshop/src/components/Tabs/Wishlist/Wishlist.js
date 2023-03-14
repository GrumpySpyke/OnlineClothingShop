import WishlistEntry from "./WishlistEntry";
import "../../../index.css";
import { useState } from "react";
import Product from "../Products/Product";
import {GoX} from "react-icons/go";
function Wishlist() {

    const [showProduct, setShowProduct] = useState(false);
    const [currentProduct,setCurrentProduct]=useState();
    
    const closeProduct=()=>{
        setShowProduct(false);
    }

    const handleImgClick = (product) => {
        console.log(product);
        setCurrentProduct(product);
        setShowProduct(true);
    }

    const products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: false },
    { name: "Hanorac Chanel barbati", sex: "M", marca: "Chanel", category: "hanorac", price: "300", disc: false },
    { name: "Geaca Burberry barbati", sex: "M", marca: "Burberry", category: "geaca", price: "300", disc: false },
    { name: "Sosete Zara barbati", sex: "M", marca: "Burberry", category: "sosete", price: "300", category: "", disc: false },
    { name: "Pulover H&M barbati", sex: "M", marca: "", category: "pulover", price: "300", disc: false },
    { name: "Tricou Pull&Bear barbati", sex: "M", marca: "Burberry", category: "tricou", price: "300", disc: false },
    { name: "Camasa gucci barbati", sex: "M", marca: "Burberry", category: "camasa", price: "200", disc: true },
    { name: "Caciula Chanel barbati", sex: "M", marca: "Burberry", category: "caciula", price: "300", disc: false },
    { name: "Manusi Burberry barbati", sex: "M", marca: "Burberry", category: "manusi", price: "300", disc: false },
    { name: "Adiasi Zara barbati", sex: "M", marca: "Burberry", category: "incaltari", price: "300", disc: false },
    { name: "Pantaloni H&M barbati", sex: "M", marca: "Burberry", category: "pant", price: "300", disc: false },
    { name: "Boxeri Pull&Bear barbati", size: "M", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: false }
    ];


    let wishlistContent = products.map((product) => {
        return <WishlistEntry product={product} handleImgClick={handleImgClick}/>
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
                <Product product={currentProduct} onClose={closeProduct} />
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
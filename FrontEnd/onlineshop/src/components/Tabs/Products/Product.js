import { useState } from "react";
import { GoHeart } from 'react-icons/go';
import AdminProductView from "./AdminProductView";
import { useEffect } from "react";
function Product({ product, onClose, isAdmin }) {


    const [hoverWishlist, setHoverWishlist] = useState(false);
    const [sizes, setSizes] = useState(["","M","L","XL"]);
    const [size, setSize] = useState("");

    // useEffect(() => {
    //     product.stock.map((stockValue) => {
    //         setSizes(stockValue.size);
    //     })
    // },[]);

    const handleAddCart = (event) => {
        event.preventDefault();
        const size = event.target[0].value;
        console.log(size) // marimea tricoului 
        if (size == "") {
            console.log("noBueno")
        }
        onClose();
    }

    let adminContent;
    if (isAdmin) {
        adminContent = <div>
            <AdminProductView />
        </div>
    }

    return <div className="mt-16 flex ml-16 border-12 border-black">

        <img
            className="w-96 h-96 border-4 border-black mb-16    "
            src="https://picsum.photos/200/200"
        />
        <div className="ml-16 mr-4">

            <button className="ml-56"
                onClick={() => console.log("added to favs")}>
                <GoHeart size={50}
                    onMouseEnter={() => { setHoverWishlist(true) }}
                    onMouseLeave={() => { setHoverWishlist(false) }} />
            </button>
            {hoverWishlist && (<div className="ml-32 border-4 border-yellow-300 bg-yellow-300 ">Adauga in Wishlist</div>)}
            <div className="w-64">
                <div className="">
                    <label >{product.name} </label>
                    <label style={{ float: "right" }}>{product.price} RON</label>

                </div>
                <div className="mt-1">
                    <label>Marca:</label>
                    <label style={{ float: "right" }}>{product.brand}</label>
                </div>
                <div className="mt-1">
                    <label>Categorie:</label>
                    <label style={{ float: "right" }}>{product.category}</label>
                </div>
            </div>
            <div className="">

            </div>

            <form onSubmit={(event) => handleAddCart(event)} className="inset-x-0 bottom-0 flex">

                <div>
                    <select className="ml-52 border-8" style={{ marginTop: 190 }} id="data" >
                        {sizes.map((size) => <option>{size}</option>)}
                    </select>
                    <div>
                        {/* <button className="delete" style={{ marginLeft: 2 }} onClick={() => setSize("")}></button> */}
                        <button className="button is-primary" style={{ marginLeft: 130, marginTop: 10 }}>Adauga in cos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Product;
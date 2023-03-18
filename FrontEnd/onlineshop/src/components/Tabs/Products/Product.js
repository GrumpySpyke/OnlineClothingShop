import { useState } from "react";
import { GoHeart } from 'react-icons/go';
import { AiOutlineEdit } from 'react-icons/ai';
import AdminProductView from "./AdminProductView";
import { useEffect } from "react";
import { addItemToBasket, addItemToWishlist, getProductSizes } from "../../../services/database-client";
function Product({ username, product, onClose, isAdmin,isWishlistItem }) {


    const [hoverWishlist, setHoverWishlist] = useState(false);
    const [sizes, setSizes] = useState(["", "M", "L", "XL"]);
    const [size, setSize] = useState("");
    const [error, setError] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        getProductSizes(product.id)
            .then((res) => {
                console.log(res.data)
                setSizes(res.data)
            })
    }, [])

    const addToWishlist = () => {
        addItemToWishlist(product.id, username)
            .then((res) => {
                console.log(res.data)
            })
    }


    const handleAddCart = (event) => {
        event.preventDefault();
        const size = event.target[0].value;
        if (size != "") {
            addItemToBasket(product.id, username, size)
                .then((res) => {
                    console.log(res.data);
                    onClose();
                })
        }
        else {
            setError(true);
        }
    }

    const editItem = () => {
        setEdit(true);
    }

    let adminContent;
    if (isAdmin) {
        adminContent = <div>
            <AdminProductView product={product}/>
        </div>
    }

    let productContent = <div className="ml-16 mr-4">

        {!isAdmin && !isWishlistItem && <button className="ml-56">
            <GoHeart size={50}
                onMouseEnter={() => { setHoverWishlist(true) }}
                onMouseLeave={() => { setHoverWishlist(false) }}
                onClick={() => addToWishlist()} />
        </button>}
        {isAdmin && <button className="ml-56">
            <AiOutlineEdit size={50}
                onClick={() => editItem()}
            />
        </button>}
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
                    <button className="button is-primary" style={{ marginLeft: 130, marginTop: 10 }}>Adauga in cos</button>
                </div>
            </div>
        </form>
    </div>
    return <div>
        <div className="mt-16 flex ml-16 border-12 border-black">

            <img
                className="w-96 h-96 border-4 border-black mb-16    "
                src="https://picsum.photos/200/200"
            />
            {!edit && productContent}
            {edit && adminContent}
        </div>
        {error && (<div className="border-red-500 bg-red-500 text-left text-white text-center">Selectati o marime!</div>)}
    </div>
}

export default Product;
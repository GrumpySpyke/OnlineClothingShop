import { useState } from "react";
import { GoHeart } from 'react-icons/go';
function Product({ name, price, onClose}) {

    const [size, setSize] = useState("");
    const [hoverWishlist,setHoverWishlist]=useState(false);
    const sizes = ["S", "M", "L", "XL"]

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target[0].value) // marimea tricoului 
    }

    const handleAddCart=()=>{
        onClose();
    }
    return <div className="mt-16 flex ml-16 border-12 border-black">

        <img
            className="w-96 h-96 border-4 border-black mb-16    "
            src="https://picsum.photos/200/200"
        />
        <div className="ml-16 mr-4">

            <button className="ml-56"
                onClick={() => console.log("added to favs")}>
                <GoHeart size={25}
                    onMouseEnter={() => { setHoverWishlist(true) }}
                    onMouseLeave={()=>{setHoverWishlist(false)}}/>
            </button>
            {hoverWishlist && (<div className="ml-32 border-4 border-yellow-300 bg-yellow-300 ">Adauga in Wishlist</div>)}
            <div className="w-64">
                <div className="">
                    <label >{name} </label>
                    <label style={{ float: "right" }}>{price} RON</label>

                </div>
                <div className="mt-1">
                    <label>Marca:</label>
                    <label style={{ float: "right" }}>Pula</label>
                </div>
                <div className="mt-1">
                    <label>Categorie:</label>
                    <label style={{ float: "right" }}>Pula</label>
                </div>
            </div>
            <div className="">

            </div>

            <form onSubmit={handleSubmit} className="inset-x-0 bottom-0 flex">

                <div>
                    <select className="ml-52 border-8" style={{ marginTop:190 }}id="data" >
                        {sizes.map((size) => <option onClick={(event) => { console.log(event.target) }}>{size}</option>)}
                    </select>
                    <div>
                        {/* <button className="delete" style={{ marginLeft: 2 }} onClick={() => setSize("")}></button> */}
                        <button className="button is-primary" style={{ marginLeft: 130, marginTop: 10 }} onClick={()=>{handleAddCart()}}>Adauga in cos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Product;
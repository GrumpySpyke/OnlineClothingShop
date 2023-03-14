import { useState } from "react";
import { GoX } from "react-icons/go";
function WishlistEntry({ product,handleImgClick}) {
    const [hoverDelete, setHoverDelete] = useState(false);

    const onClickDelete = () => {
        console.log("bueno")
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
                {(product.size) && <label className="ml-4 text-xl h-1 mb-16">Marime: {product.size}</label>}
            </div>
            <div className="ml-24">
                <div className="grid">
                    {/* <button className="delete" style={{ marginLeft: 2 }} onClick={() => setSize("")}></button> */}
                    <button className="button is-primary" style={{ marginLeft: 130, marginTop: 10 }} onClick={() => { console.log("merge") }}>Adauga in cos</button>
                </div>
                <button
                    className="ml-64 mt-16"
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
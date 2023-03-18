import { useState } from "react";
import { editProduct } from "../../../services/database-client";
function AdminProductView({product,refreshProduct}) {
    const [name,setName]=useState(product.name);
    const [brand,setBrand]=useState(product.brand);
    const [category,setCategory]=useState(product.brand);
    const [sex,setSex]=useState(product.sex);
    const [price,setPrice]=useState(product.price);

    const [sexOptions,setSexOptions]=useState(["M","F","C"]);
    const handleEditProduct=(event)=>{
        event.preventDefault();
        console.log(name,brand,category,price,event.target[3].value);
        editProduct(name,brand,category,price,event.target[3].value)
        .then((res)=>{
            console.log(res);
            refreshProduct();
        })
    }

    return <div >
        <form onSubmit={(event) => handleEditProduct(event)}>
            <div className="inline-flex">
                <label style={{ fontSize: 20, marginBottom: 5,marginLeft: 9 }}>Nume:</label>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9 }}
                    placeholder="Nume"
                    value={name}
                    onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
            <label style={{ fontSize: 20, marginBottom: 5,marginLeft: 9 }}>Marca:</label>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Marca"
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}></input>
            </div>
            <div>
            <label style={{ fontSize: 20, marginBottom: 5,marginLeft: 9 }}>Categorie:</label>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Categorie"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}></input>
            </div>
            <div>
            <label style={{ fontSize: 20, marginBottom: 5,marginLeft: 9 }}>Sex:</label>
            <select className="ml-52 border-8" style={{ marginTop: 190 }} id="data" >
                    {sexOptions.map((option) => <option>{option}</option>)}
                </select>
            </div>
            <div>
            <label style={{ fontSize: 20, marginBottom: 5,marginLeft: 9 }}>Pret:</label>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Pret"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}></input>
            </div>

            <div className="mt-2">
                <button className="button is-primary"
                    style={{ marginLeft: 25, marginTop: 5, width: 200 }}>Aplicati modificari</button>
            </div>
        </form>
    </div>
}

export default AdminProductView;
import SignUp from "../../LoginPage/Signup";
import { useState } from "react";
import NewProduct from "./NewProduct";
import { addProduct } from "../../../services/database-client";
function Admin() {

    const [newAccount,setNewAccount]=useState(true);
    const [newProduct,setNewProduct]=useState(false);

    const switchTab =()=>{
        setNewAccount(!newAccount);
        setNewProduct(!newProduct);
    }   

    const handleRegisterNewProduct=(name,brand,category,price,sex)=>{
        console.log(price)
        addProduct(name,brand,category,price,sex)
        .then((res)=>{
            console.log(res.data);
        })
    }

    let newAccountContent = <div style={{ display: "grid", justifyContent: "center", alignContent: "center", placeContent: "center", marginTop: 200 }}>
        <SignUp isAdmin={true} />
    </div>
    
    let newProductContent = <div>
       <NewProduct handleRegisterNewProduct={handleRegisterNewProduct}/>
    </div>

    let buttonContent = <div>
        <button className="border-4 border-green-500 bg-green-700 w-64 mt-5 ml-2 text-white"
        onClick={switchTab}>
            Adaugati un Nou Produs
            /
            Adaugati un nou user
        </button>
    </div>
    return <div className="grid place-content-center">
        {newAccount  && newAccountContent }
        {newProduct && newProductContent }
        {buttonContent}

    </div>
}

export default Admin;
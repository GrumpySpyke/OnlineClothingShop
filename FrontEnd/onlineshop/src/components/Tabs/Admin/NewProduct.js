import { useState } from "react";

function NewProduct({handleRegisterNewProduct}) {
    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [category,setCategory]=useState();
    const [price,setPrice]=useState();
    const [sex,setSex]=useState();

    const [showHover,setShowHover]=useState(false);
    const [showError,setShowError]=useState(false);
    const [showErrorData,setShowErrorData]=useState(false);
    const [showSuccess,setShowSuccess]=useState(false);
    const [success,setSuccess]=useState()
    const registerProduct=(event)=>{
        event.preventDefault();
        if(name && category && brand && price && sex){
            handleRegisterNewProduct(name,brand,category,price,sex)
                setSuccess(true);
                setShowErrorData(false);
      
        }
        else{
            setShowErrorData(true);
        }
    }

    return <div style={{ display: "grid", justifyContent: "center", alignContent: "center", placeContent: "center", marginTop: 200 }}>
        <form onSubmit={(event)=>registerProduct(event)}>
            <div>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9 }}
                    placeholder="Nume"
                    value={name}
                    onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Marca"
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}></input>
            </div>
            <div>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Categorie"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}></input>
            </div>
            <div>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="sex"
                    value={sex}
                    onChange={(event) => setSex(event.target.value)}></input>
            </div>
            <div>
                <input style={{ fontSize: 20, marginBottom: 5, marginLeft: 9, marginTop: 10 }}
                    placeholder="Pret"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}></input>
            </div>
          
            <div className="mt-2">
                <button className="button is-primary"
                    style={{ marginLeft: 25, marginTop: 5, width: 200 }}>Adauga produs</button>
            </div>
        </form>
        {showErrorData && (<div className="border-red-500 bg-red-500 text-left text-white text-center">Toate campurile sunt obligatorii</div>)}
        {success && (<div className="border-green-500 bg-green-500 text-left text-white text-center">Produs adaugat cu success</div>)}
    </div>
}

export default NewProduct;
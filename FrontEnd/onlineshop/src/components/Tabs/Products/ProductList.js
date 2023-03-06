import Product from "./Product"
import ProductView from "./ProductView";
import { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
function ProductList({ sex, filters, refreshed,isAdmin}) {

    const filtersssss = {
        marca: "",
        category: "",
        disc: false

    }

    const [showProduct, setShowProduct] = useState(false);

    // useEffect(()=>{
    //     setShowProduct(false);
    // },[])

    const closeProduct = () => {
        setShowProduct(false);
    }

    let products;
    let displayProducts;
    let displayProduct;

    switch (sex) {
        case "M":

            products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: false },
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
            { name: "Boxeri Pull&Bear barbati", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: false }];



            break;

        case "F":

            products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: false },
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
            { name: "Boxeri Pull&Bear barbati", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: false }];
            break;

        case "C":
            products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: false },
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
            { name: "Boxeri Pull&Bear barbati", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: false }];
            break;

    }

    const handleImgClick = () => {
        setShowProduct(true);
    }
    
    const onHandleDelete=(name)=>{
        
    }

    if (showProduct) {
        displayProducts = null;
        displayProduct = <div>
            <div className="flex">

                <div className="border-8 ml-8 mt-8 border-black">
                    <button
                        onClick={closeProduct}>
                        <GoX size={50} className="top" />
                    </button>
                    <Product name="Placeholder" price="300" onClose={closeProduct}/>
                </div>
            </div>
        </div>
    }

    if (!showProduct) {
        displayProducts = products.map((product, key) => {
            return <ProductView name={product.name} 
            price={product.price} 
            disc={product.disc} 
            key={key} 
            onImgClick={handleImgClick} 
            isAdmin={isAdmin} 
            onHandleDelete={onHandleDelete}/>
        })
        displayProduct = null;
    }


    return <div >
        <div className="book-list">
            {displayProducts}

        </div>
        <div className="ml-96">
            {displayProduct}
        </div>
    </div>

}

export default ProductList
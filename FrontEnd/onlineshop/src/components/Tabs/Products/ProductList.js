import Product from "./Product"
import ProductView from "./ProductView";
import { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { GetFilteredProducts,GetSearchProduct } from "../../../services/database-client";
function ProductList({ filters, isAdmin, isSearch, isSearchF, pattern }) {

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

    if (filters) {
        switch (filters.sex) {
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

                products = [{ name: "Tricou gucci femei", marca: "Gucci", category: "tricou", sex: "F", price: "300", disc: false },
                { name: "Hanorac Chanel femei", sex: "F", marca: "Chanel", category: "hanorac", price: "300", disc: false },
                { name: "Geaca Burberry femei", sex: "F", marca: "Burberry", category: "geaca", price: "300", disc: false },
                { name: "Sosete Zara femei", sex: "F", marca: "Burberry", category: "sosete", price: "300", category: "", disc: false },
                { name: "Pulover H&M femei", sex: "F", marca: "", category: "pulover", price: "300", disc: false },
                { name: "Tricou Pull&Bear femei", sex: "F", marca: "Burberry", category: "tricou", price: "300", disc: false },
                { name: "Camasa gucci femei", sex: "F", marca: "Burberry", category: "camasa", price: "200", disc: true },
                { name: "Caciula Chanel femei", sex: "F", marca: "Burberry", category: "caciula", price: "300", disc: false },
                { name: "Manusi Burberry femei", sex: "F", marca: "Burberry", category: "manusi", price: "300", disc: false },
                { name: "Adiasi Zara femei", sex: "F", marca: "Burberry", category: "incaltari", price: "300", disc: false },
                { name: "Pantaloni H&M femei", sex: "F", marca: "Burberry", category: "pant", price: "300", disc: false },
                { name: "Boxeri Pull&Bear femei", sex: "F", marca: "Burberry", category: "boxeri", price: "300", disc: false }];
                break;

            case "C":
                products = [{ name: "Tricou gucci copii", marca: "Gucci", category: "tricou", sex: "C", price: "300", disc: false },
                { name: "Hanorac Chanel copii", sex: "C", marca: "Chanel", category: "hanorac", price: "300", disc: false },
                { name: "Geaca Burberry copii", sex: "C", marca: "Burberry", category: "geaca", price: "300", disc: false },
                { name: "Sosete Zara copii", sex: "C", marca: "Burberry", category: "sosete", price: "300", category: "", disc: false },
                { name: "Pulover H&M copii", sex: "C", marca: "", category: "pulover", price: "300", disc: false },
                { name: "Tricou Pull&Bear copii", sex: "C", marca: "Burberry", category: "tricou", price: "300", disc: false },
                { name: "Camasa gucci copii", sex: "C", marca: "Burberry", category: "camasa", price: "200", disc: true },
                { name: "Caciula Chanel copii", sex: "C", marca: "Burberry", category: "caciula", price: "300", disc: false },
                { name: "Manusi Burberry copii", sex: "C", marca: "Burberry", category: "manusi", price: "300", disc: false },
                { name: "Adiasi Zara copii", sex: "C", marca: "Burberry", category: "incaltari", price: "300", disc: false },
                { name: "Pantaloni H&M copii", sex: "C", marca: "Burberry", category: "pant", price: "300", disc: false },
                { name: "Boxeri Pull&Bear copii", sex: "C", marca: "Burberry", category: "boxeri", price: "300", disc: false }];
                break;
            case "R":
                products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: true },
                { name: "Hanorac Chanel barbati", sex: "M", marca: "Chanel", category: "hanorac", price: "300", disc: true },
                { name: "Geaca Burberry barbati", sex: "M", marca: "Burberry", category: "geaca", price: "300", disc: true },
                { name: "Sosete Zara barbati", sex: "M", marca: "Burberry", category: "sosete", price: "300", category: "", disc: true },
                { name: "Pulover H&M barbati", sex: "M", marca: "", category: "pulover", price: "300", disc: true },
                { name: "Tricou Pull&Bear barbati", sex: "M", marca: "Burberry", category: "tricou", price: "300", disc: true },
                { name: "Camasa gucci barbati", sex: "M", marca: "Burberry", category: "camasa", price: "200", disc: true },
                { name: "Caciula Chanel barbati", sex: "M", marca: "Burberry", category: "caciula", price: "300", disc: true },
                { name: "Manusi Burberry barbati", sex: "M", marca: "Burberry", category: "manusi", price: "300", disc: true },
                { name: "Adiasi Zara barbati", sex: "M", marca: "Burberry", category: "incaltari", price: "300", disc: true },
                { name: "Pantaloni H&M barbati", sex: "M", marca: "Burberry", category: "pant", price: "300", disc: true },
                { name: "Boxeri Pull&Bear barbati", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: true }];
                break;
        }

        if (isSearchF) {

            GetFilteredProducts(filters);
            products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: true },
            { name: "Hanorac Chanel barbati", sex: "M", marca: "Chanel", category: "hanorac", price: "300", disc: true },
            { name: "Geaca Burberry barbati", sex: "M", marca: "Burberry", category: "geaca", price: "300", disc: false },
            { name: "Sosete Zara barbati", sex: "M", marca: "Burberry", category: "sosete", price: "300", category: "", disc: true },
            { name: "Pulover H&M barbati", sex: "M", marca: "", category: "pulover", price: "300", disc: true },
            { name: "Tricou Pull&Bear barbati", sex: "M", marca: "Burberry", category: "tricou", price: "300", disc: true },
            { name: "Camasa gucci barbati", sex: "M", marca: "Burberry", category: "camasa", price: "200", disc: false },
            { name: "Caciula Chanel barbati", sex: "M", marca: "Burberry", category: "caciula", price: "300", disc: false },
            { name: "Manusi Burberry barbati", sex: "M", marca: "Burberry", category: "manusi", price: "300", disc: true },
            { name: "Adiasi Zara barbati", sex: "M", marca: "Burberry", category: "incaltari", price: "300", disc: true },
            { name: "Pantaloni H&M barbati", sex: "M", marca: "Burberry", category: "pant", price: "300", disc: false },
            { name: "Boxeri Pull&Bear barbati", sex: "M", marca: "Burberry", category: "boxeri", price: "300", disc: true }];
        }
    }
    if (isSearch) {
        GetSearchProduct(pattern);
        products = [{ name: "Tricou gucci barbati", marca: "Gucci", category: "tricou", sex: "M", price: "300", disc: true }];
    }

    const handleImgClick = () => {
        setShowProduct(true);
    }

    const onHandleDelete = (name) => {
        console.log("aici")
        products = products.filter((product) => {
            console.log(product);
            console.log(product.name != name)
            return product.name != name;

        })

        console.log(products);
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
                    <Product name="Placeholder" price="300" onClose={closeProduct} />
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
                handleImageClick={handleImgClick}
                isAdmin={isAdmin}
                onHandleDelete={onHandleDelete} />
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
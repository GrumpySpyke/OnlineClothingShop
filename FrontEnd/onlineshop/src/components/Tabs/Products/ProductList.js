import Product from "./Product"
import ProductView from "./ProductView";
import { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { getFilteredProducts, getSearchProduct } from "../../../services/database-client";
function ProductList({ filters, isAdmin, pattern }) {

    const [showProduct, setShowProduct] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(!pattern)
        {
        getFilteredProducts(filters)
            .then((res) => {
                console.log(res.data[0]);
                setProducts(res.data);
            })
        }
        else {
            getSearchProduct(pattern);
        }
    }, [filters])

    const closeProduct = () => {
        setShowProduct(false);
    }

    const handleImgClick = (product) => {
        console.log(product);
        setCurrentProduct(product);
        setShowProduct(true);
    }

    const onHandleDelete = (name) => {
        console.log("aici")
    }

    return <div>
        {!showProduct && <div className="book-list">
            {products.map((product, key) => {
                return <ProductView product={product}
                    key={key}
                    handleImageClick={handleImgClick}
                    isAdmin={isAdmin}
                    onHandleDelete={onHandleDelete} />
            })}

        </div>
        }
        {showProduct && <div className="ml-96">
            <div className="flex">
                <div className="border-8 ml-8 mt-8 border-black">
                    <button onClick={closeProduct}>
                        <GoX size={50} className="top" />
                    </button>
                    <Product product={currentProduct} onClose={closeProduct} isAdmin={isAdmin} />
                </div>
            </div>
        </div>}
    </div>;

}

export default ProductList
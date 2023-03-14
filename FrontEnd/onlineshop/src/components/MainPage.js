
import ProductList from "./Tabs/Products/ProductList";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import Basket from "./Tabs/Basket/Basket";
import Account from "./Tabs/Account/Account";
import Contact from "./Tabs/Contact/Contact"
import Wishlist from "./Tabs/Wishlist/Wishlist";
import Admin from "./Tabs/Admin/Admin";
import MainPageContent from "./Tabs/MainPage/MainPageContent";
import { GetFilteredProducts } from "../services/database-client";
function MainPage({ onLogOut }) {

    const [page, setPage] = useState("mainpage");
    const [filters, setFilters] = useState();
    const [searchText,setSearchText]=useState();
    const isAdmin = true;

    const handleCloseBasket=()=>{
        setPage("account");
    }

    const onHandleNavigation = (page, filters,searchText) => {
        setPage(page);
        if (page === "searchFiltered") {
            const f={
                sex:filters[0],
                category:filters[1],
                brand:filters[2],
                priceMin:filters[3],
                priceMax:filters[4]
            }

            setFilters(f);

        }
        if(page=== "search"){
            setSearchText(searchText);
        }
    }

    let filterValues = {
        sex: "R",
        category: "",
        brand: "",
        priceMin: "",
        priceMax: ""
    }

    let content;

    switch (page) {
        case "mainpage":
            filterValues = {
                sex: "R",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={isAdmin} />
            
            break;
        case "men":
            filterValues = {
                sex: "M",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={isAdmin} />
            break;
        case "women":
            filterValues = {
                sex: "F",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={isAdmin} />
            break;
        case "children":
            filterValues = {
                sex: "C",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={isAdmin} />
            break;
        case "search":
            content = <ProductList pattern={searchText} isSearch={true} isAdmin={isAdmin} />
            break;
        case "searchFiltered":

            content = <ProductList filters={filters} isSearchF={true} isAdmin={isAdmin} />
            break;
        case "wishlist":
            content = <Wishlist />
            break;
        case "basket":
            let items = [{ name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 100, disc: true, size: "M" },
            { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 200, disc: false, size: "M" },
            { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 400, disc: true, size: "M" },
            { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
            { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 500, disc: true, size: "M" },
            { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 300, disc: false, size: "M" },
            { name: "Tricou gucci barbati", brand: "Gucci", category: "tricou", sex: "F", price: 600, disc: true, size: "M" },
            { name: "Boxeri Pull&Bear barbati", sex: "M", brand: "Burberry", category: "boxeri", price: 700, disc: false, size: "M" }];
            content = <Basket handleCloseBasket={handleCloseBasket} items={items}/>
            break;
        case "account":
            content = <Account />
            break;
        case "contact":
            content = <Contact />
            break;
        case "admin":
            content = <Admin />
    }

    return (
        <>
            <NavBar onLogOut={onLogOut} onHandleNavigation={onHandleNavigation} isAdmin={isAdmin}></NavBar>
            {content}
        </>
    )
}

export default MainPage;
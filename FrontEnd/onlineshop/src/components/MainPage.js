
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
function MainPage({ onLogOut, accountData}) {

    const [page, setPage] = useState("mainpage");
    const [filters, setFilters] = useState();
    const [searchText,setSearchText]=useState();

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
            content = <ProductList filters={filterValues} isAdmin={accountData.isAdmin} username={accountData.username}/>
            
            break;
        case "men":
            filterValues = {
                sex: "M",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={accountData.isAdmin} username={accountData.username}/>
            break;
        case "women":
            filterValues = {
                sex: "F",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={accountData.isAdmin} username={accountData.username}/>
            break;
        case "children":
            filterValues = {
                sex: "C",
                category: "",
                brand: "",
                priceMin: "",
                priceMax: ""
            }
            content = <ProductList filters={filterValues} isAdmin={accountData.isAdmin} username={accountData.username}/>
            break;
        case "search":
            content = <ProductList pattern={searchText} isAdmin={accountData.isAdmin} username={accountData.username}/>
            break;
        case "searchFiltered":
            content = <ProductList filters={filters} isAdmin={accountData.isAdmin} username={accountData.username}/>
            break;
        case "wishlist":
            content = <Wishlist username={accountData.username}/>
            break;
        case "basket":

            content = <Basket handleCloseBasket={handleCloseBasket} accountData={accountData}/>
            break;
        case "account":
            content = <Account accountData={accountData}/>
            break;
        case "contact":
            content = <Contact />
            break;
        case "admin":
            content = <Admin />
    }

    return (
        <>
            <NavBar onLogOut={onLogOut} onHandleNavigation={onHandleNavigation} isAdmin={accountData.isAdmin}></NavBar>
            {content}
        </>
    )
}

export default MainPage;
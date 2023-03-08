
import ProductList from "./Tabs/Products/ProductList";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import Basket from "./Tabs/Basket/Basket";
import Account from "./Tabs/Account/Account";
import Contact from "./Tabs/Contact/Contact"
import Wishlist from "./Tabs/Wishlist/Wishlist";
import Admin from "./Tabs/Admin/Admin";
import MainPageContent from "./Tabs/MainPage/MainPageContent";
function MainPage({ onLogOut }) {

    const [page, setPage] = useState("mainpage");

    const isAdmin=true;

    const onHandleNavigation =(page)=>{
        setPage(page);
    }

    let content;
    switch (page) {
        case "mainpage":
            content=<ProductList sex="R" filters={["",""]} isAdmin={isAdmin}/>
            break;
        case "men":
            content=<ProductList sex="M" filters={["",""]} isAdmin={isAdmin}/>
            break;
        case "women":
            content=<ProductList sex="F" filters={["",""]} isAdmin={isAdmin}/>
            break;
        case "children":
            content=<ProductList sex="C" filters={["",""]} isAdmin={isAdmin}/>
            break;
        case "search":
            
            break;
        case "searchFiltered":

            break;
        case "wishlist":
            content=<Wishlist/>
            break;
        case "basket":
            content=<Basket/>
            break;
        case "account":
            content=<Account/>
            break;
        case "contact":
            content=<Contact/>
            break;
        case "admin":
            content=<Admin/>
    }

    return (
        <>
            <NavBar onLogOut={onLogOut} onHandleNavigation={onHandleNavigation} isAdmin={isAdmin}></NavBar>
            {content}
        </>
    )
}

export default MainPage;
import { useState } from "react";
import { GoListUnordered, GoSignOut, GoSearch } from "react-icons/go"
import { BsFillCartCheckFill, BsFillTelephonePlusFill } from "react-icons/bs"
import { MdAccountCircle } from "react-icons/md"
import { RiAdminFill} from "react-icons/ri"
import FilterOption from "./FilterOption";
function NavBar({ onLogOut, onHandleNavigation, isAdmin}) {

  const [showAdmin, setShowAdmin] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  let category;
  let adminContent;
  let filterContent = null;
  const filterOptions = ["Sex", "Categorie", "Marca", "Pret"]

  const onClickMen = () => {
    category = "men";
    //onHandleCategory(category);
    onHandleNavigation("men")
  }

  const onClickWomen = () => {
    category = "women";
   // onHandleCategory(category);
    onHandleNavigation("women");
  }

  const onClickChildren = () => {
    category = "children";
   // onHandleCategory(category);
    onHandleNavigation("children")
  }

  const onClickWishlist = () => {
    onHandleNavigation("wishlist");
  }

  const onClickAdmin = () => {
    onHandleNavigation("admin");
  }

  const onClickContact = () => {
    onHandleNavigation("contact");
  }

  const onClickAccount = () => {
    onHandleNavigation("account");
  }

  const onClickBasket = () => {
    onHandleNavigation("basket");
  }
  const onClickMainPage = () => {
    onHandleNavigation("mainpage");
  }

  const onFilteredSearch = (event) => {
    event.preventDefault();
    const message = [event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value, event.target[4].value]

    setShowFilters(false);
    
    onHandleNavigation("searchFiltered",message);

  }

  const onSearch =(event)=>{
    event.preventDefault()

    onHandleNavigation("search",undefined,searchText);
  }
  adminContent = <li>
    <button style={{
      border: "none",
      outline: "none",
      background: "none",
      color: "white",
      marginTop: 18
    }}
      onClick={onClickAdmin}>
      <RiAdminFill size={20} className="w-20" />
    </button>
  </li>


  if (!isAdmin) {
    adminContent = null
  }

  if (showFilters) {
    filterContent = <FilterOption filter={filterOptions} />

  }

  if (!showFilters) {
    filterContent = null;
  }


  return <nav className="nav">
    <div>
      <button className="site-title" style={{ border: "none", outline: "none", background: "#333", color: "white", marginTop: 0, fontSize: 50 }} onClick={onClickMainPage}>
        Site Name
      </button>
    </div>

    <ul>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "#333",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickMen}>
          Barbati
        </button>
      </li>
      <li>

        <button style={{
          border: "none",
          outline: "none",
          background: "#333",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickWomen}>
          Femei
        </button>
      </li>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "#333",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickChildren}>
          Copii
        </button>
      </li>
    </ul>

    <div className="w-1/2">
      <div className="inline-flex">
        <form onSubmit={(event)=>{onSearch(event)}}>
          <button className="mr-3 " >
            <GoSearch className="" size={18} />
          </button>
          <input className="w-96 h-7 border-4 border-trasnparent text-black my-4 "
            value={searchText}
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}>
          </input>
        </form>
        <button className="ml-3 "
          onClick={() => setShowFilters(!showFilters)}>
          <GoListUnordered size={20} />
        </button>
      </div>
      <form onSubmit={(event) => { onFilteredSearch(event) }}>
        {filterContent}
      </form>
    </div>
    <ul>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "#333",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickWishlist}>
          Wishlist
        </button>
      </li>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "#333",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickBasket}
          className="w-12">
          <BsFillCartCheckFill size={25} className="ml-3" />
        </button>
      </li>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "none",
          color: "white",
          marginTop: 18
        }} onClick={onClickContact} className="w-12">
          <BsFillTelephonePlusFill className="ml-3" size={25} />
        </button>
      </li>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "none",
          color: "white",
          marginTop: 18
        }}
          onClick={onClickAccount}
          className="w-12">
          <MdAccountCircle size={25} className="ml-3" />
        </button>
      </li>
      <li>
        <button style={{
          border: "none",
          outline: "none",
          background: "none",
          color: "white",
          marginTop: 18
        }}
          className="w-12"
          onClick={onLogOut}>
          <GoSignOut className="ml-4" size={25} />
        </button>
      </li>
      {adminContent}
    </ul>
  </nav>
}

export default NavBar;


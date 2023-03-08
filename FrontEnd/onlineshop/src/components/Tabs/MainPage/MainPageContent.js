import ProductList from "../Products/ProductList"

function MainPageContent() {


    const offersMen = [{ name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }]
    const offersWomen = [{ name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }]
    const offersChildren = [{ name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 },
    { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }, { name: "Oferta1", price: 159 }]
    return <>
      <ProductList sex="M" filters={["",""]}/>

    </>
}
export default MainPageContent;
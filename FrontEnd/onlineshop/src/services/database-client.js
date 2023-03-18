import axios from "axios";



export const authenticateUser= (username,password)=>{

    console.log("localhost:7068/login?username="+username+"&password="+password)
    return axios.get("https://localhost:7068/login?username="+username+"&password="+password);
}

export const registerUser=(userData)=>{
    console.log(userData);
    return axios.post("https://localhost:7068/register",{
        adress:userData.adress,
        email:userData.email,
        name:userData.name,
        surname:userData.surname,
        password:userData.password,
        phone:userData.phone,
        username:userData.username
    },{

        headers:{
            Accept:"application/json"
        }
    });
}

export const getFilteredProducts=(filters)=>{
    const url = "https://localhost:7068/filtered-search";
    return axios.post(url,{sex:filters.sex,category:filters.category,brand:filters.brand,priceMin:filters.priceMin,priceMax:filters.priceMax})
}

export const getSearchProduct=(searchText)=>{
    return axios.get("https://localhost:7068/pattern?pattern="+searchText);
}

export const getAccountInfo= (username)=>{
    const url = "https://localhost:7068/account-info?username="+username
    console.log(url)
    
    return axios.get(url)
}

export const getOrders= (username)=>{
    const url = "https://localhost:7068/orders?username="+username

    return axios.get(url)
}

export const getWishlist = (username)=>{
    const url = "https://localhost:7068/wishlist?username="+username;
    
    return axios.get(url)
}

export const getBasket = (username)=>{
    const url = "https://localhost:7068/basket?username="+username;
    
    return axios.get(url)
}

export const registerAdmin=(userData)=>{
    console.log(userData);
    return axios.post("https://localhost:7068/register-admin",{
        adress:userData.adress,
        email:userData.email,
        isAdmin:userData.isAdmin,
        name:userData.name,
        surname:userData.surname,
        password:userData.password,
        phone:userData.phone,
        username:userData.username
    },{

        headers:{
            Accept:"application/json"
        }
    });
}

export const addItemToWishlist=(id,username)=>{
    return axios.post("https://localhost:7068/wishlist?id="+id+"&username="+username)
}

export const removeItemFromWishlist=(id,username)=>{
    return axios.delete("https://localhost:7068/wishlist?id="+id+"&username="+username)
}

export const addItemToBasket=(id,username,size)=>{
    return axios.post("https://localhost:7068/basket?id="+id+"&username="+username+"&size="+size)
}

export const removeItemFromBasket=(id,username)=>{
    return axios.delete("https://localhost:7068/basket?id="+id+"&username="+username)
}

export const removeProduct=(id)=>{
    return axios.delete("https://localhost:7068/products?id="+id)
}

export const executeOrder = (orderData)=>{
    console.log(orderData.price)
    return axios.post("https://localhost:7068/newOrder",{
        username:orderData.username,
        adress:orderData.adress,
        phone:orderData.phone,
        products:orderData.products,
        price:orderData.price.toString()
    },{

        headers:{
            Accept:"application/json"
        }
    })
}

export const getProductSizes=(id)=>{
    return axios.get("https://localhost:7068/sizes?id="+id);
}

export const updatePassword=(username,password)=>{
    return axios.put("https://localhost:7068/password?username="+username+"&password="+password)
}

export const updateInfo=(username,info)=>{
    return axios.put("https://localhost:7068/info?username="+username,{
        email:info.email,
        adress:info.adress,
        phone:info.phone
    })
}

export const cancelOrder=(username,id)=>{
    return axios.delete("https://localhost:7068/cancel?username="+username+"&id="+id);
}

export const returnItem=(username,idOrder,idProduct)=>{
    return axios.delete("https://localhost:7068/return?username="+username+"&idOrder="+idOrder+"&idItem="+idProduct)
}

export const addProduct=(name,brand,category,price,sex)=>{
    console.log(price);
    return axios.post("https://localhost:7068/products",{
        name:name,
        brand:brand,
        category:category,
        sex:sex,
        price:price
    })
}

export const editProduct=(name,brand,category,price,sex)=>{
    return axios.put("https://localhost:7068/products",{
        name:name,
        brand:brand,
        category:category,
        sex:sex,
        price:price.toString()
    })
}

export const addStock= (id,size,stock)=>{
    return axios.post("https://localhost:7068/stock?id="+id+"&size="+size+"&stock="+stock);
}
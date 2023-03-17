import axios from "axios";



export const authenticateUser= async(username,password)=>{

    const response= await axios.post("localhost:7068/authenticate",{username,password});
    return response.data;
}

export const getAllClothingData = async()=>{
    const response= await axios.get("localhost:7068/clothing");
    return response.data;
}

export const getFilteredProducts=(filters)=>{
    const url = "https://localhost:7068/filtered-search";
    return axios.post(url,{sex:filters.sex,category:filters.category,brand:filters.brand,priceMin:filters.priceMin,priceMax:filters.priceMax})
}

export const getSearchProduct=(searchText)=>{
    console.log(searchText);
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
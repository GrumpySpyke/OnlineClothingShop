import axios from "axios";



export const AuthenticateUser= async(username,password)=>{

    const response= await axios.post("localhost:7068/authenticate",{username,password});
    return response.data;
}

export const GetAllClothingData = async()=>{
    const response= await axios.get("localhost:7068/clothing");
    return response.data;
}

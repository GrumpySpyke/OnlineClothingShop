import { useEffect, useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import OrderEntry from "./OrderEntry";
import Moment from "moment";
import OrderPage from "./OrderPage";
import ReturnPage from "./ReturnPage";
import { getAccountInfo, getOrders, updateInfo, updatePassword } from "../../../services/database-client";
function Account({accountData }) {
    //booleans
    const [editPassword, setEditPassword] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [showReturnOrder, setShowReturnOrder] = useState(false);

    //objects
    const [currentOrder, setCurrentOrder] = useState();
    const [orders, setOrders] = useState();

    //strings
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newAdress, setNewAdress] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newUsername, setNewUsername] = useState("")
    //initialize account info
    useEffect(() => {


        setNewEmail(accountData.email);
        setNewAdress(accountData.adress);
        setNewPhone(accountData.phone);
        setNewUsername(accountData.username);

    }, [])


    //Functions

    const onClickApplyInfo = () => {
        updateInfo(accountData.username,{phone:newPhone,adress:newAdress,email:newEmail})
        .then((res)=>{
            console.log(res.data)
            setEditInfo(false);
        })
        
    }

    const onClickApplyPassword = () => {
        if (newPassword == repeatNewPassword) {
            updatePassword(accountData.username,newPassword)
            .then((res)=>{
                console.log(res);
                setEditPassword(false);
            })
            

        }
    }

    const handleShowOrder = (order) => {
        setCurrentOrder(order);
        setShowOrders(false);
        setShowOrder(true);
    }

    const handleClickX = () => {
        setShowOrder(false);
        setShowReturnOrder(false);
        setShowOrders(false)
    }

    const handleShowReturnOrder = (order) => {
        setCurrentOrder(order)
        setShowReturnOrder(true);

    }

    const handleShowOrders = () => {

        if (!showOrders) {
            getOrders(accountData.username)
                .then((res) => {
                    setOrders(res.data);
                    setShowOrders(true);

                })
        }
        else{
            setShowOrders(false);
        }
    }

    //Content
    let returnOrderContent = null;
    let ordersContent = null;
    let orderContent = null;

    let passwordContent = <div>
        <button className="" onClick={() => setEditPassword(true)}>Edit Password</button>
    </div>
    let displayedButton = <button className="ml-60 mt-16 mb-4 border-8 bg-slate-100 w-24 border-slate-100 text-yellow-800 "
        onClick={() => setEditInfo(true)}>Edit</button>

    let emailContent = <div className="flex items-center">
        <label className="text-2xl">Email:{newEmail} </label>

    </div>

    let adressContent = <div className="flex items-center">
        <label className="text-2xl">Adresa:{newAdress}</label>
    </div>

    let phoneContent = <div className="flex items-center">
        <label className="text-2xl">Telefon:{newPhone} </label>
    </div>

    if (editPassword) {
        passwordContent = <div className="my-1">
            <div className="flex items-center">
                <label>Parola noua: </label>
                <input className="ml-8 border-2 border-solid" type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}></input>
            </div>
            <div className="flex items-center my-2 w-64">
                <label>Reintroduceti parola: </label>
                <input className=" ml-4 border-2 border-solid" type="password" value={repeatNewPassword} onChange={(event) => setRepeatNewPassword(event.target.value)}></input>

            </div>
            <div>
                <button className="ml-52 mr-2 mt-2 border-8 bg-green-500 w-36 border-green-500 text-blue-800"
                    onClick={() => onClickApplyPassword()}>Apply</button>
                <button className="ml-2 border-8 bg-red-500 w-36 border-red-500 text-white"
                    onClick={() => setEditPassword(false)}>Cancel</button>
            </div>
        </div>
    }


    if (editInfo) {
        emailContent = <div className="my-1">
            <div className="flex items-center">
                <label>Email nou: </label>
                <input className="mx-5 border-2 border-solid" value={newEmail} onChange={(event) => setNewEmail(event.target.value)}></input>
                {/* <button className="mx-2 border-blue-600">Apply</button>
                <button className="mx-2 border-blue-600" onClick={()=>{setEditEmail(false)}}>Cancel</button> */}
            </div>
        </div>

        adressContent = <div className="my-1">
            <div className="flex items-center">
                <label>Adresa noua: </label>
                <input className="mx-2 border-2 border-solid" value={newAdress} onChange={(event) => setNewAdress(event.target.value)}></input>
                {/* <button className="mx-2 border-blue-600">Apply</button>
                <button className="mx-2 border-blue-600" onClick={()=>{setEditAdress(false)}}>Cancel</button> */}
            </div>
        </div>

        phoneContent = <div className="my-1">
            <div className="flex items-center">
                <label>Telefon nou: </label>
                <input className="mx-4 border-2 border-solid" value={newPhone} onChange={(event) => setNewPhone(event.target.value)}></input>
                {/* <button className="mx-2 border-blue-600">Apply</button>
                <button className="mx-2 border-blue-600" onClick={()=>{setEditPhone(false)}}>Cancel</button> */}
            </div>
        </div>

        displayedButton = <div className="">
            <button className="ml-24 mt-2 border-8 bg-green-500 w-24 border-green-500 text-blue-800"
                onClick={() => onClickApplyInfo()}>Apply</button>
            <button className="border-8 bg-red-500 w-24 border-red-500 text-white mb-2"
                onClick={() => setEditInfo(false)}>Cancel</button>
        </div>
    }

    let buttonOrders = <button className="button is-primary" onClick={() => handleShowOrders()}>Afisati comenzile</button>

    let accountContent = <div className="text-3xl py-5 mr-96">
        <div className="flex items-center text-6xl mb-6">
            <label>Username:</label>
            <label>{newUsername}</label>
        </div>
        {passwordContent}
        <div className="mt-64">
            {buttonOrders}

        </div>
    </div>

    let personalContent = <div className="py-5 ml-64 w-1/4">
        <div className="">
            <label className="text-4xl ">Informatii Personale</label>
        </div>
        <div className="py-2">
            <div className="ml-6 border-slate-300 border-8 mr-96 w-96">
                <div className="ml-4 mt-2">
                    {emailContent}
                    {adressContent}
                    {phoneContent}
                    {displayedButton}
                </div>
            </div>
        </div>
    </div>


    if (showOrders) {
        ordersContent = orders.map((order) => {
            return <div>
                <OrderEntry order={order} handleShowOrder={handleShowOrder} handleShowReturnOrder={handleShowReturnOrder} />
            </div>
        })
    }
    if (showOrder) {
        accountContent = null;
        personalContent = null;
        ordersContent = null;
        orderContent = <OrderPage order={currentOrder} handleClickX={handleClickX} username={accountData.username}/>
        returnOrderContent = null;
    }

    if (showReturnOrder) {
        accountContent = null;
        personalContent = null;
        ordersContent = null;
        orderContent = null;
        returnOrderContent = <ReturnPage order={currentOrder} handleClickX={handleClickX} username={accountData.username}/>;
    }
    ///Return
    return <div>
        <div className="inline-flex place-content-center border-8">

            {accountContent}
            {personalContent}

        </div>
        <div className="justify-center">
            {ordersContent}
        </div>
        {orderContent}
        {returnOrderContent}
    </div>
}

export default Account;
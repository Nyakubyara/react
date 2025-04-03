import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

function HomePage(){
const [page,setPage]=useState("login");
    return(
        <>
        <div className="flex justify-center p-3 space-x-4">
            <button onClick={()=>setPage("login")} className="bg-blue-400 p-2 w-50 rounded-sm text-white" >Login </button>
            <button onClick={()=>setPage("signUp")} className="bg-blue-400 p-2 w-50 rounded-sm text-white">Sign-Up</button>
        </div>
        <div>
            {page==="login" && <Login />}
            {page==="signUp" && <SignUp />}
        </div>
        </>
    )
}
export default HomePage;
import React, { useState } from "react";
const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(null);
    const [showPassword,setShowPassword] = useState(false);
    

const login = () => {
    if(email === "admin@gmail.com" && password === "admin"){
        setCheck('correct credentials')
    }
    else{
            setCheck('Incorrect credentials')
        } 
    

    };
    


    // const handleChange = (e) => {
    //     e.preventDefault(); // Prevent form from refreshing the page
        
    //     setCheck(email === "admin@gmail.com" && password === "admin" ? 
    //         "Correct credentials" : 
    //         "Incorrect credentials"
    //     );
    // };

    return (
        <div className="bg-blue-400 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                
                  
                    <h1 className="text-center font-semibold">Login</h1>
                    <div className={`${check =="correct credentials"?"text-green-600 bg-green-200": check =="Incorrect credentials"?"text-red-600  bg-red-200":"text-gray-500"} p-2  w-full mt-2 mb-2 `}>
                    {check ? check:"welcome back"}
                    </div>


                    <div>
                        <label className="block font-semibold">Email:</label>
                        <input 
                            type="text" 
                            placeholder="Enter email" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type={'${showPassword ? "text":"password"}'} onChange={(e) => setPassword(e.target.value)} id="show-password" className="cursor-pointer"  />
                        <label htmlFor="show-password" className="cursor-pointer">Show Password</label>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
                        onClick={login}
                    >
                        SIGN IN
                    </button>
                
                <div className="mt-4 text-center text-sm">
                    <p className="text-gray-600">Forgot <span className="text-blue-500">password/username</span>?</p>
                    <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
                </div>
            </div>
            <div className="mt-4 text-white font-semibold">
                {/* {check} */}
            </div>
        </div>
    );
};

export default Form;

import React from "react";
import '../index.css';
const Body = () =>{
    return (
        <>
        <div className='flex flex-row gap-1 p-10 justify-evenly bg-white h-screen'>
            <div className='my-20 flex flex-col gap-2'>
                <h2 className='text-5xl text-blue-800 font-bold'>Facebook</h2>
                <p className='w-100 text-2xl'>Connect with friends and the world around you on facebook</p>
                <form action="" className='flex flex-col w-80 gap-4 p-5 bg-bisque h-80'>
                    <input type="text" placeholder="Enter username"  className=" w-full h-10 border-s-blue-200 text-center"/>
                    <input type="text" placeholder="Enter password" className=" w-full h-10 border-s-blue-200 text-center" />
                    <button className="bg-green-700" >login</button>
                </form>
            </div>
        </div>
 

        </>
    )
}
export default Body;
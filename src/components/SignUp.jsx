function SignUp(){
    return(
        <>
  <div className="flex justify-center items-center w-full h-screen p-5">
            <form className="bg-gray-300  p-10 rounded-lg">
                <h1 className="text-center mb-4 text-white">SIGN UP</h1>
                <div className="flex flex-col gap-2">
                    <input type="text" className="p-2 bg-white w-60 border-0 rounded-md" placeholder="Username" />
                    <input type="text" className="p-2 bg-white w-60 border-0 rounded-md" placeholder="Email" />
                    <input type="password" className="p-2 bg-white w-60 border-0 rounded-md" placeholder="Password" />
                    <input type="password" className="p-2 bg-white w-60 border-0 rounded-md" placeholder="Confirm Password" />
                    <input type="submit" value="CREATE ACCOUNT" className="p-2 bg-blue-400 rounded-xl w-60 text-amber-50 " />
                    <p className="text-gray-600 text-sm flex justify-center">Already have an account?<a href="">Login here</a></p>
                </div>
            </form>
        </div>
        </>
    )
}
export default SignUp;
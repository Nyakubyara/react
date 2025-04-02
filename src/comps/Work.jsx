function Work(){
    return (
        <>
        <div className="h-screen w-full flex justify-center items-center bg-[#1B1E3F]">
                <form action="" className="pt-6 flex justify-center bg-[rgba(43,48,72,0.8)] w-[400px] rounded-sm p-4">
                <table className="" >
                <h2 className="font-bold text-center text-amber-50 ">CONTACT US</h2>
                <tr><td className="text-amber-50">Name</td></tr>
                <tr><td><input type="text" name="name" placeholder="Enter your name" className="rounded-sm bg-[#555A7B] p-1 text-white"/></td></tr>
                <tr><td className="text-amber-50">Email</td></tr>
                <tr><td><input type="email" name="email" placeholder="Enter your email" className="rounded-sm bg-[#555A7B] p-1 text-white"/></td></tr>
                <tr><td className="text-amber-50">Message</td></tr>
                <tr><td><textarea name="message" placeholder="Enter your message" className="rounded-sm bg-[#555A7B] w-47 text-white" ></textarea></td></tr>
                <tr><td><input type="submit" className="w-full bg-[#FF7F9C] rounded-sm text-white" value="SEND MESSAGE" /></td></tr>
                </table>
                </form>
        </div>
        </>
    )
}
export default Work

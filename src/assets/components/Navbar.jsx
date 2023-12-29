function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="bg-[#9f9fce] flex  max-w-full  items-center text-black h-20  ">


        <div id="logo" className="ml-[2px] h-24 w-24 overflow-hidden logo bg-no-repeat bg-center bg-contain scale-[1.3]">
        </div>


        <div id="for_phone" className="hidden sm:w-screen sm:flex  sm:justify-between  ">
          <div className="w-1 p-4 invisible"></div>

          <div
            id="icon"
            className="flex items-center w-[50vw] px-2 justify-between font-bold">

            <div className="page">About us</div>
            <div className=" page">Store</div>
            <div className=" page">Map</div>
            <div className=" page">Contact</div>

          </div>

          <div className=" text-[#6b7280] font-black mr-5  ">
                <a className="hover:text-blue-600 " href="/mlogin">Signup/Login</a>
          </div>
            
        </div>


        <div id="ham" className="sm:hidden ml-auto ham h-12 w-12"></div>
      </nav>
      <script>
        
      </script>
    </>
  );
}
export default Navbar;

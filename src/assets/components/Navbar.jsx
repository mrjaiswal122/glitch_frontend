function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="bg-[#9f9fce] flex  max-w-full  items-center text-black h-20  ">


        <div id="logo" className="ml-[2px] h-24 w-24 overflow-hidden svg-container bg-no-repeat bg-center bg-contain scale-[1.4]">
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


        <div id="ham" className="sm:hidden ml-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="48px"
            height="48px"
          >
            <path d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z" />
          </svg>
        </div>
      </nav>
      <script>
        
      </script>
    </>
  );
}
export default Navbar;

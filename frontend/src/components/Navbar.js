import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Navbar = () => {
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* left div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input className="input outline-none" type="text" />
            <SearchIcon className="" style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Logo div */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">LOGO IMAGE</div>
        </div>

        {/* 25:31 */}

        <div>3</div>
      </div>
    </div>
  );
};

export default Navbar;

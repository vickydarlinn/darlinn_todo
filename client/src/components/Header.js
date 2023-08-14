import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"} className="text-2xl font-bold">
          Darlinn Todo
        </Link>
      </div>
      <div className="relative">
        <button
          className="p-2 rounded-md focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {/* You can use an icon or any other visual element here */}
          <div className="w-4 h-4">
            {menuOpen ? <ImCross /> : <AiOutlineMenu />}
          </div>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg">
            <div className="py-2 flex flex-col">
              <Link
                to={"/settings"}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {" "}
                Settings
              </Link>
              <Link
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

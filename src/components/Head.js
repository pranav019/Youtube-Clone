import React from "react";
import hamburgerIcon from "../Images/hamburger-icon.jpg";
import youtubeIcon from "../Images/youtube-logo.jpg";
import { FaSearch } from "react-icons/fa";

const Head = () => {
  return (
    <div className="grid items-center grid-flow-col p-5 m-2 pt-1 shadow-lg">
      {/* logo and Icon section */}
      <div className="flex  items-center col-span-1 ">
        <img className="h-12" src={hamburgerIcon} alt="menu-icon" />
        <img className="h-16  mx-2" src={youtubeIcon} alt="youtube-logo" />
      </div>

      {/* SearchBar section */}
      <div className="col-span-10 pl-64">
        <div className="flex w-1/2 border border-gray-500 rounded-full overflow-hidden">
          {/* Input box */}
          <input
            className="flex-1 p-2 focus:outline-none rounded-tl-full rounded-bl-full"
            type="text"
            placeholder="Search"
          />

          {/* Search button with icon */}
          <button className="p-2 bg-gray-100 flex items-center justify-center pl-4 pr-4 border-l border-gray-500">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* user account */}
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Head;

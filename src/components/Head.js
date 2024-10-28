import React from "react";
import hamburgerIcon from "../Images/hamburger-icon.jpg";
import youtubeIcon from "../Images/youtube-logo.jpg";

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
        <input
          className="w-1/2 focus:outline-none border border-gray-500 p-2 rounded-tl-full rounded-bl-full"
          type="text"
        />
        <button className="border border-gray-500 p-2 rounded-tr-full rounded-br-full bg-gray-100">
          Search
        </button>
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

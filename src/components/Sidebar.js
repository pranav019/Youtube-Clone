import {
  FaHome,
  FaFire,
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaNewspaper,
  FaFootballBall,
  FaBook,
  FaPodcast,
  FaCog,
  FaHistory,
  FaQuestionCircle,
  FaCommentDots,
} from "react-icons/fa";
import { MdVideoLibrary, MdOutlineLiveTv, MdTrendingUp } from "react-icons/md";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // subscribed to the specific state of the slice (part of the store)
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg">
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaHome className="" />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdTrendingUp className="" />
          <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdVideoLibrary className="" />
          <span>Videos</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlineLiveTv className="" />
          <span>Live</span>
        </li>
      </ul>

      {/* Separator line */}
      <hr className="my-4 border-gray-300" />

      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="space-y-4 pt-4">
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaFire className="" />
          <span>Trending</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaShoppingBag className="" />
          <span>Shopping</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaMusic className="" />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaFilm className="" />
          <span>Movies</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlineLiveTv className="" />
          <span>Live</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaGamepad className="" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaNewspaper className="" />
          <span>News</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaFootballBall className="" />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaBook className="" />
          <span>Courses</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaPodcast className="" />
          <span>Podcasts</span>
        </li>
      </ul>

      {/* Separator line */}
      <hr className="my-4 border-gray-300" />

      <ul className="space-y-4">
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaCog className="" />
          <span>Settings</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaHistory className="" />
          <span>Report History</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaQuestionCircle className="" />
          <span>Help</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaCommentDots className="" />
          <span>Send Feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

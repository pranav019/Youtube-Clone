import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 space-x-2 p-4">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Zakir Khan" />
      <Button name="Software Development" />
      <Button name="Fintech" />
      <Button name="Podcast" />
      <Button name="Bollywood" />
      <Button name="News" />
      <Button name="Politics" />
      <Button name="Samay Raina" />
      <Button name="Devotional" />

    </div>
  );
};

export default ButtonList;

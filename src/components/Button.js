import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer font-medium whitespace-nowrap m-2 w-max">
      {name}
    </button>
  );
};

export default Button;

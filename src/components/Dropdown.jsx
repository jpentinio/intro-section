import React from "react";

const Dropdown = ({ isMobile, items }) => {
  return (
    <div
      className={`w-max bg-white p-2 rounded-2xl flex flex-col ${
        !isMobile && "absolute shadow-xl"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="text-sm p-2 cursor-pointer flex items-center gap-4"
        >
          {item.icon && <img src={item.icon} />}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

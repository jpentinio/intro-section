import React, { useState } from "react";
import Dropdown from "./Dropdown";
import iconTodo from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";

import iconMenu from "../assets/icon-menu.svg";
import iconMenuClose from "../assets/icon-close-menu.svg";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const items = [
  {
    name: "Features",
    dropdownItems: [
      { icon: iconTodo, name: "Todo List" },
      { icon: iconCalendar, name: "Calendar" },
      { icon: iconReminders, name: "Reminders" },
      { icon: iconPlanning, name: "Planning" },
    ],
  },
  {
    name: "Company",
    dropdownItems: [
      { name: "History" },
      { name: "Our Team" },
      { name: "Blog" },
    ],
  },
  { name: "Careers" },
  { name: "About" },
];
const Navbar = () => {
  const [open, setOpen] = useState({ dropdown: false, name: "" });
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between px-4 sm:px-12 py-4 bg-white text-[#696969]">
      <div className="flex items-center justify-between gap-16">
        <h1 className="text-4xl font-bold text-[#141414]">snap</h1>
        <ul className="hidden sm:flex gap-4 ">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div
                onClick={
                  item.dropdownItems
                    ? () =>
                        setOpen((prev) =>
                          prev.dropdown
                            ? { dropdown: false, name: "" }
                            : { dropdown: true, name: item.name }
                        )
                    : null
                }
                className="hover:text-[#141414] px-4 py-3 flex items-center gap-2"
              >
                <p className="select-none cursor-pointer">{item.name}</p>
                {item.dropdownItems ? (
                  open.dropdown && open.name === item.name ? (
                    <img src={arrowUp} className="w-3 h-2" />
                  ) : (
                    <img src={arrowDown} className="w-3 h-2" />
                  )
                ) : (
                  ""
                )}
              </div>
              {open.dropdown && open.name === item.name ? (
                <Dropdown items={item.dropdownItems} />
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="absolute right-12 hidden sm:flex justify-between items-center gap-6">
        <button className="px-6 py-3 hover:text-[#141414]">Login</button>
        <button className="px-6 py-3 border-2 border-[#696969] hover:text-[#141414] hover:border-[#141414] rounded-2xl">
          Register
        </button>
      </div>
      <button
        onClick={toggleDrawer}
        className="flex absolute right-6 sm:hidden"
      >
        <img src={iconMenu} alt="menu" />
      </button>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        direction="right"
        className="p-4"
      >
        <div className="flex justify-end">
          <button onClick={toggleDrawer}>
            {" "}
            <img src={iconMenuClose} alt="menuClose" />
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div
                onClick={
                  item.dropdownItems
                    ? () =>
                        setOpen((prev) =>
                          prev.dropdown
                            ? { dropdown: false, name: "" }
                            : { dropdown: true, name: item.name }
                        )
                    : null
                }
                className="hover:text-[#141414] px-4 py-3 flex items-center gap-2"
              >
                <p className="select-none cursor-pointer">{item.name}</p>
                {item.dropdownItems ? (
                  open.dropdown && open.name === item.name ? (
                    <img src={arrowUp} className="w-3 h-2" />
                  ) : (
                    <img src={arrowDown} className="w-3 h-2" />
                  )
                ) : (
                  ""
                )}
              </div>
              {open.dropdown && open.name === item.name ? (
                <Dropdown isMobile={true} items={item.dropdownItems} />
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>

        <div className="flex flex-col justify-between items-center gap-6 mt-4">
          <button className="w-full px-6 py-3 hover:text-[#141414]">
            Login
          </button>
          <button className="w-full px-6 py-3 border-2 border-[#696969] hover:text-[#141414] hover:border-[#141414] rounded-2xl">
            Register
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

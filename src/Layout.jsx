import React from "react";
import logo from "./logo.svg";
import { Link, Outlet } from "react-router-dom";
import { Button, Drawer } from "antd";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="bg-[#1E212C] text-white ">
      <div className="px-[80px] flex justify-between items-center py-4 mb-[120px] ">
        <div className="flex items-center gap-[30px]">
          <img src={logo} alt="Logo" className="h-6" />
          <ul className="hidden md:flex gap-[20px] text-gray-500 text-sm">
            <Link to="/">
              <li className="cursor-pointer hover:text-[#7772F1]">
                {" "}
                Services{" "}
              </li>
            </Link>
            <Link to="case">
              <li className="cursor-pointer hover:text-[#7772F1]">
                Case Studies
              </li>
            </Link>
            <Link to="about">
              <li className="cursor-pointer hover:text-[#7772F1]">Contacts</li>
            </Link>
            <Link to="user">
              <li className="cursor-pointer hover:text-[#7772F1]">Blog</li>
            </Link>
            <Link to="#">
              <li className="cursor-pointer hover:text-[#7772F1]">About Us</li>
            </Link>
          </ul>
        </div>

        <button className="hidden md:block cursor-pointer bg-[#7772F1] hover:bg-[#5d5acf] text-white px-[30px] py-[10px] rounded-[4px] transition-all duration-300">
          Talk to a human
        </button>
        <Button
          type="default"
          onClick={showLoading}
          className="!block md:!hidden !bg-blue-500 !text-white !shadow-lg hover:!bg-blue-600"
          size="large"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5M3.75 18.75h16.5"
            />
          </svg>
        </Button>

        <Drawer
          className="!bg-[#1E212C] !text-white"
          closable
          destroyOnClose
          title={<p className="text-white text-xl font-semibold">Menu</p>}
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ul className="space-y-6 text-white text-xl font-medium">
            <li onClick={ () => setOpen( false ) }>
              <Link
                to="/"
                className="hover:text-[#7772F1] transition duration-300"
              >
                Services
              </Link>
            </li>
            <li onClick={ () => setOpen( false ) }>
              <Link
                to="/case"
                className="hover:text-[#7772F1] transition duration-300"
              >
                Case Studies
              </Link>
            </li>
            <li onClick={ () => setOpen( false ) }>
              <Link
                to="/about"
                className="hover:text-[#7772F1] transition duration-300"
              >
                Contacts
              </Link>
            </li>
            <li onClick={ () => setOpen( false ) }>
              <Link
                to="/user"
                className="hover:text-[#7772F1] transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li onClick={ () => setOpen( false ) }>
              <Link
                to="#"
                className="hover:text-[#7772F1] transition duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Button
              type="primary"
              className="!bg-[#7772F1] !text-white !px-6 !py-2 !rounded-lg hover:!bg-[#5d5be0] transition"
              onClick={showLoading}
            >
              Reload
            </Button>
          </div>
        </Drawer>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;

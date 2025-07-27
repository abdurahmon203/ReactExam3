import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Users from "./pages/Users";
import UserById from "./pages/UserById";
import About from "./pages/Services";
import Home from "./pages/Home";
import Case from "./pages/CaseStudies";
import logo from "./logo.svg";
import socials1 from "./socials1.svg";
import award2 from "./award2.svg";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="case" element={<Case />} />
        <Route path="user" element={<Users />} />
        <Route path="user/:id" element={<UserById />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
      <div className="bg-[#1E212C] px-[80px] py-[40px] ">
        <div className="block md:flex gap-[50px] border-b-[#DADBDD80] border-b-[1px] ">
          <div>
            <img src={logo} alt="" className="h-6" />
            <p className="text-white w-[265px] pt-[15px] pb-[30px] text-[12px] ">
              Createx SEO Agency is a full-service digital marketing agency.
              We help businesses make more money through a wealth of performance
              data and market research. We create science-based SEO strategies
              to empower our clients.
            </p>
            <a href="https://instagram.com/__abdurahmon90">
              <img src={socials1} alt="" className="pb-[50px] " />
            </a>
          </div>
          <div className="flex gap-[50px]">
            <div className="text-white ">
              <p className="text-[16px] ">COMPANY</p>
              <p className="text-[14px] mt-[10px] ">About Us</p>
              <p className="text-[14px] ">Case Studies</p>
              <p className="text-[14px] ">Blog</p>
              <p className="text-[14px] ">Careers</p>
              <p className="text-[14px] ">Contacts</p>
            </div>
            <div className="text-white ">
              <p className="text-[16px] ">SERVICES</p>
              <p className="text-[14px] mt-[10px] ">Social Media</p>
              <p className="text-[14px] ">SEO</p>
              <p className="text-[14px] ">Research</p>
              <p className="text-[14px] ">Content & PR</p>
              <p className="text-[14px] ">Payed Traffic</p>
            </div>
          </div>
          <div className="text-white ">
            <p className="text-[16px] ">CONTACT US</p>
            <div className="flex mt-[10px] gap-[5px] items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <p className="text-[14px] ">(405) 555-0128</p>
            </div>
            <span className="text-[14px] flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-[5px] inline ">hello@createx.com</span>
            </span>
          </div>
          <div className="text-white ">
            <p>SIGN UP TO OUR NEWSLETTER</p>
            <input
              value="                                                   >"
              type="text"
              className="mt-[25px] mb-[10px] py-[5px] bg-[#FFFFFF1F] rounded-[4px] border-[#FFFFFF33] border-[1px] w-[246px] "
            />
            <p className="w-[286px] ">
              *Subscribe to our newsletter to receive communications and early
              updates from Createx SEO Agency.
            </p>
          </div>
        </div>
        <div className="mt-[50px] block text-start md:flex text-white justify-between ">
          <img src={award2} alt="" />
          <div className="flex ml-[20%] mt-[20px] gap-[10px] items-center md:items-end ">
            <p>GO TO TOP</p>
            <a href="#">
              <button className="bg-[#7772F1] rounded-[4px] h-[40px] w-[40px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 ml-[8px] "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-[20px] ">
        <p className="text-center ">
          © All rights reserved.Made with by Createx Studio{" "}
        </p>
      </div>
    </div>
  );
};

export default App;
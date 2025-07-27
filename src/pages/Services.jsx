import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import log10 from "./log10.svg";
import log11 from "./log11.svg";
import log12 from "./log12.svg";
import log13 from "./log13.svg";
import log14 from "./log14.svg";
import log15 from "./log15.svg";
import ic from "./ic.svg";
import ic2 from "./ic2.svg";
import ic3 from "./ic3.svg";
import il4 from "./il4.svg";
import ic4 from "./ic4.svg";
import ic5 from "./ic5.svg";
import ic6 from "./ic6.svg";
import imgl from "./imgl.svg";
import card1 from "./card1.svg";

import hover from "./hover.svg";
import card2 from "./card2.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import il from "./il.svg";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  width: "1200px",
  color: "#FFF",
  background: "#7772F1",
};

function About() {
  return (
    <div>
      <div>
        <div className="px-[80px] pb-[80px] ">
          <h1 className="text-[#FFFFFF] text-[42px] md:text-[72px] font-bold text-center ">
            Search Engine Optimization
          </h1>
          <p className="text-[#FFFFFF] text-[20px] md:w-[810px] text-center m-auto mt-[10px] mb-[30px] ">
            Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui
            pellentesque enim integer facilisi. Ultrices vitae tempor amet nec
            euismod non.
          </p>
          <div className="text-center mt-[40px] ">
            <label
              htmlFor="lab"
              className="text-start ml-[20px] md:ml-[250px] block text-[16px] text-[#FFFFFF] "
            >
              Your website URL
            </label>
            <input
              id="lab"
              placeholder="http://yoursite.com"
              type="text"
              className="my-[10px] bg-[#FFFFFF1F] border-[2px] rounded-[4px] md:rounded-l-[4px] md:w-[600px] h-[52px] border-[#FFFFFF33] "
            />
            <button className="text-white bg-[#7772F1] md:rounded-r-[4px] h-[52px] md:ml-[-184px] px-[40px] ml-[10%] md:rounded-[0px] rounded-[4px] block md:inline ">
              Analyse your site
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white px-[80px] py-[80px] ">
        <Carousel
          className="mt-[50px] "
          autoplay={{ dotDuration: true }}
          autoplaySpeed={4000}
          arrows
        >
          <div>
            <img style={contentStyle} src={log10} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={log11} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={log12} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={log13} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={log14} alt="" />
          </div>
          <div>
            <img style={contentStyle} src={log15} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white pb-[50px] px-[80px] ">
        <img src={imgl} alt="" />
        <div>
          <h1 className="text-[46px] text-center md:w-[450px] md:text-start text-[#1E212C] font-bold ">
            We go above and beyond to ensure successful SEO
          </h1>
          <p className="text-[#787A80] md:text-start text-center md:w-[390px] my-[10px] md:my-[40px] ">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
            viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
            diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
            ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
            pharetra, tristique libero. Dolor risus ac quam dictum mattis
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
            hendrerit. Cras at ac magna ultricies orci.
          </p>
        </div>
      </div>
      <div className="bg-white py-[80px] px-[80px] ">
        <h1 className="text-[#1E212C] text-[46px] mb-[40px] font-bold text-center ">
          SEO services include
        </h1>
        <div className="flex flex-col gap-[34px] ">
          <div className="md:ml-[0px] ml-[-40px] flex md:gap-[0px] gap-[20px] flex-col md:flex-row justify-between ">
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                SEO Strategy
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic2} className="m-auto " alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Competitor Analysis
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec
                sed massa pharetra duis ut porttitor.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic3} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Technical Audit
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Congue viverra in quis urna lectus proin massa. Aliquam, justo
                nisl sed diam nibh vehicula.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[0px] gap-[20px] justify-between md:ml-[0px] ml-[-40px] ">
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic4} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Content Strategy
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Posuere sed quam etiam semper id id euismod. Feugiat cras donec
                elementum interdum in.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic5} className="m-auto " alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Media Promotion
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Aliquam turpis viverra quam sit interdum blandit posuere
                pellentesque. Nisl, imperdiet gravida massa neque.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic6} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                SEO Reports
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Congue phasellus est, amet sem bibendum sollicitudin arcu
                scelerisque senectus. Mauris, mus tincidunt a, nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7772F1] mt-[50px] p-[46px]">
        <h1 className="text-[#FFFFFF] font-bold text-[32px] text-center mb-[30px]">
          Get a Free SEO Analysis!
        </h1>
        <div className="flex justify-evenly flex-col md:flex-row">
          <div>
            <label htmlFor="90" className="text-white text-[14px]">
              Name
            </label>{" "}
            <br />
            <input
              type="text"
              id="90"
              required
              placeholder="Your name"
              className="mt-[5px] bg-white text-[#9A9CA5] mb-[30px] md:mb-0 rounded-lg w-[260px] pt-[10px] pb-[10px] pl-[10px]"
            />
          </div>
          <div>
            <label htmlFor="100" className="text-white text-[14px]">
              Email
            </label>{" "}
            <br />
            <input
              type="text"
              id="100"
              required
              placeholder="Your working email"
              className="bg-white text-[#9A9CA5] mb-[30px] md:mb-0 mt-[5px] w-[260px] rounded-lg pt-[10px] pb-[10px] pl-[10px]"
            />
          </div>
          <div>
            <label htmlFor="200" className="text-white text-[14px]">
              Your website URL
            </label>{" "}
            <br />
            <input
              type="text"
              id="200"
              required
              placeholder="http://yoursite.com"
              className="bg-white text-[#9A9CA5] mb-[30px] md:mb-0 mt-[5px] w-[260px] md:w-[338px] rounded-lg pt-[10px] pb-[10px] pl-[10px]"
            />
          </div>
          <button className="text-[#FFFFFF] bg-[#1E212C] text-[14px] rounded-lg w-[180px] h-[44px] mt-[24px] hover:scale-105 transition-transform duration-300">
            Analyse your site
          </button>
        </div>
      </div>
      <div className="bg-white py-[80px] px-[80px] ">
        <h2 className="text-[46px] text-[#1E212C] text-center font-bold">
          That’s how it works
        </h2>
        <div className="flex flex-row-reverse justify-center mt-[50px] gap-[100px] ">
          <div>
            <p className="text-[#787A80] text-[12px] font-semibold">STEP 1</p>
            <p className="font-bold py-[10px] text-[#1E212C] text-[20px] ">
              Off-Site SEO Analysis
            </p>
            <p className="text-[#787A80] md:w-[340px] ">
              Aliquam turpis viverra quam sit interdum blandit posuere
              pellentesque. Nisl, imperdiet gravida massa neque.
            </p>
          </div>
          <div className="mt-[200px] ">
            <p className="text-[#787A80] text-[12px] font-semibold">STEP 2</p>
            <p className="font-bold py-[10px] text-[#1E212C] text-[20px] ">
              Technical SEO Optimizations
            </p>
            <p className="text-[#787A80] md:w-[340px] ">
              Facilisis pellentesque quis accumsan ultricies. Eu egestas eget
              feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl
              orci auctor et fames. Vestibulum viverra faucibus faucibus et
              convallis.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center mt-[50px] gap-[100px] ">
          <div>
            <p className="text-[#787A80] text-[12px] font-semibold">STEP 3</p>
            <p className="font-bold py-[10px] text-[#1E212C] text-[20px] ">
              Usability Check
            </p>
            <p className="text-[#787A80] md:w-[340px] ">
              Eget amet, enim pharetra leo egestas nisi, odio imperdiet
              facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.
              Varius praesent pretium in leo, accumsan, in ultricies.
            </p>
          </div>
          <div className="mt-[200px] ">
            <p className="text-[#787A80] text-[12px] font-semibold">STEP 4</p>
            <p className="font-bold py-[10px] text-[#1E212C] text-[20px] ">
              Content Marketing
            </p>
            <p className="text-[#787A80] md:w-[340px] ">
              Non tempor pulvinar tincidunt aliquam. Placerat ultricies
              malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet
              quis faucibus neque.
            </p>
          </div>
        </div>
      </div>
      <div className="px-[80px] py-[80px] bg-white ">
        <h1 className="text-[#1E212C] text-[46px] text-center font-bold ">
          Flexible pricing plans
        </h1>
        <div className="text-center mt-[10px] ">
          <button className="text-white bg-[#7772F1] rounded-[40px] px-[50px] py-[10px] ">
            Monthly
          </button>
          <button className="hidden md:inline border-[1px] border-[#7772F1] text-[#7772F1] px-[30px] py-[9px] ml-[-20px] rounded-r-[40px] ">
            Yearly -12% Off
          </button>
        </div>
        <div className="flex justify-between flex-col md:flex-row ">
          <div className="transition-transform duration-1000 hover:bg-[#1E212C] hover:scale-[1.02] hover:text-[#FFFFFF] mt-[50px] border-[1.3px] rounded-[4px] py-[30px] px-[60px] border-[#7772F166] text-[#1E212C]">
            <h1 className="text-start font-bold text-[28px] ">Basic</h1>
            <h1 className="text-[46px] text-start text-[#7772F1] border-b-[1px] border-b-[#DADBDD80] ">
              $24 /mon
            </h1>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Advanced Analytics</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Change Management</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Corporate Finance</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">One Way Link Building</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Social Media Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <RemoveIcon color="error" />
              <p className="text-[16px] ">Strategy & Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <RemoveIcon color="error" />
              <p className="text-[16px] ">Information Technology</p>
            </div>
            <button className="text-white bg-[#7772F1] mt-[20px] rounded-[4px] px-[50px] py-[10px] ">
              Choose plan
            </button>
          </div>
          <div className="transition-transform duration-1000 hover:bg-[#1E212C] hover:scale-[1.02] hover:text-[#FFFFFF] mt-[50px] border-[1.3px] rounded-[4px] py-[20px] px-[60px] border-[#7772F166] text-[#1E212C]">
            <h1 className="text-start font-bold text-[28px] ">Optimal</h1>
            <h1 className="text-[46px] text-start text-[#7772F1] border-b-[1px] border-b-[#DADBDD80] ">
              $64 /mon
            </h1>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Advanced Analytics</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Change Management</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Corporate Finance</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">One Way Link Building</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Social Media Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Strategy & Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <RemoveIcon color="error" />
              <p className="text-[16px] ">Information Technology</p>
            </div>
            <button className="text-white bg-[#7772F1] mt-[20px] rounded-[4px] px-[50px] py-[10px] ">
              Choose plan
            </button>
          </div>
          <div className="transition-transform duration-1000 hover:bg-[#1E212C] hover:scale-[1.02] hover:text-[#FFFFFF] mt-[50px] border-[1.3px] rounded-[4px] py-[20px] px-[60px] border-[#7772F166] text-[#1E212C]">
            <h1 className="text-start font-bold text-[28px] ">Premium</h1>
            <h1 className="text-[46px] text-start text-[#7772F1] border-b-[1px] border-b-[#DADBDD80] ">
              $98 /mon
            </h1>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Advanced Analytics</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Change Management</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Corporate Finance</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">One Way Link Building</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Social Media Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Strategy & Marketing</p>
            </div>
            <div className="flex gap-[5px] mt-[10px] ">
              <CheckIcon color="success" />
              <p className="text-[16px] ">Information Technology</p>
            </div>
            <button className="text-white bg-[#7772F1] mt-[20px] rounded-[4px] px-[50px] py-[10px] ">
              Choose plan
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F6] px-[80px] py-[80px] ">
        <h1 className="text-[#1E212C] text-[46px] font-bold ">
          Read our clients' case studies
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="text-black ">
            <div className="flex  ">
              <img src={card1} alt="" />
              <img className="md:block hidden" src={hover} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black ">
            <div className="flex  ">
              <img src={card2} alt="" />
              <img src={card1} className="md:block hidden" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black ">
            <div className="flex  ">
              <img src={hover} alt="" />
              <img src={card2} className="md:block hidden" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center flex-col md:flex-row gap-[50px] ">
          <h1 className="text-[#1E212C] font-bold text-[28px] ">
            Explore more case studies
          </h1>
          <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
            View all case studies
          </button>
        </div>
      </div>
      <div className="bg-white px-[80px] pt-[10px] pb-[50px] ">
        <h1 className="text-[#1E212C] text-center text-[46px] font-bold mb-[20px] ">
          Our services
        </h1>
        <div>
          <div className="flex justify-between md:flex-row flex-col">
            <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
              Social Media
            </button>
            <button className="text-[#9A9CA5] px-[30px] py-[10px] ">SEO</button>
            <button className="text-[#9A9CA5] px-[30px] py-[10px] ">
              Research
            </button>
            <button className="text-[#9A9CA5] px-[30px] py-[10px] ">
              Content & PR
            </button>
            <button className="text-[#9A9CA5] px-[30px] py-[10px] ">
              Payed Traffic
            </button>
          </div>
          <div className="mt-[50px] flex justify-between flex-col md:flex-row ">
            <div>
              <h1 className="text-[#1E212C] text-[28px] md:w-[390px] font-bold ">
                Complete Worflow For Any SEO Professional
              </h1>
              <div className="flex gap-[10px] mb-[10px] mt-[20px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Aenean enim tellus morbi nisl vulputate dictumst.
                </p>
              </div>
              <div className="flex gap-[10px] mb-[10px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Nibh sapien volutpat lacus augue.
                </p>
              </div>
              <div className="flex gap-[10px] mb-[10px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Vel in amet, placerat adipiscing est pharetra.
                </p>
              </div>
              <div className="flex gap-[10px] mb-[10px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Gravida ornare sit in et ut sit sem id.
                </p>
              </div>
              <div className="flex gap-[10px] mb-[10px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Ultrices pellentesque dictum enim egestas ac diam.
                </p>
              </div>
              <div className="flex gap-[10px] mb-[40px] ">
                <CheckIcon color="info" />
                <p className="text-[#424551] ">
                  Sit semper enim senectus integer ut turpis et.
                </p>
              </div>
              <div className="flex gap-[50px] text-center flex-col md:flex-row ">
                <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                  Learn more
                </button>
                <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                  More about us
                </button>
              </div>
            </div>
            <img src={il} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

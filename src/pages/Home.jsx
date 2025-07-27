import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import play from "./play.svg";
import imggg from "./imggg.svg";
import chart from "./chart.svg";
import speak from "./speak.svg";
import com from "./com.svg";
import aw from "./aw.svg";
import log10 from "./log10.svg";
import log11 from "./log11.svg";
import log12 from "./log12.svg";
import log13 from "./log13.svg";
import log14 from "./log14.svg";
import log15 from "./log15.svg";
import img10 from "./img10.svg";
import pic from "./pic.svg";
import pic2 from "./pic2.svg";
import fig from "./fig.svg";
import fig1 from "./fig1.svg";
import fig2 from "./fig2.svg";
import fig3 from "./fig3.svg";
import CheckIcon from "@mui/icons-material/Check";
import il from "./il.svg";
import il2 from "./il2.svg";
import il3 from "./il3.svg";
import card1 from "./card1.svg";
import hover from "./hover.svg";
import card2 from "./card2.svg";
import ic from "./ic.svg";
import ic2 from "./ic2.svg";
import ic3 from "./ic3.svg";
import il4 from "./il4.svg";
import ic4 from "./ic4.svg";
import ic5 from "./ic5.svg";
import ic6 from "./ic6.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#FFF",
  width: "1200px",
  background: "#7772F1",
};

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-[80px] ">
        <div>
          <span className="text-[50px] font-bold">
            Best <span className="text-[#7772F1] "> SEO & Marketing </span>{" "}
            Solutions for You
          </span>
          <div className="mt-[20px] md:mt-[50px] flex-col md:flex-row flex gap-[20px] ">
            <button
              className="rounded-[4px] px-[30px] py-[10px] "
              style={{ border: "1px solid #FFFFFF" }}
            >
              Get a free analysis
            </button>
            <img src={play} className="h-[50px]" alt="" />
          </div>
        </div>
        <img

          src={imggg}
          alt=""
          className="h-[400px] md:h-[500px] w-[600px] md:w-[468.9px]"
        />
      </div>
      <div className="px-[80px] pb-[80px] flex md:flex-row flex-col justify-between mt-[0px] md:mt-[40px]">
        <div className="flex items-center gap-[10px] ">
          <img src={chart} alt="" />
          <p className="text-[20px] ">SEO Content Strategy</p>
        </div>
        <div className="flex items-center gap-[10px] ">
          <img src={speak} alt="" />
          <p className="text-[20px] ">Content Marketing</p>
        </div>
        <div className="flex items-center gap-[10px] ">
          <img src={com} alt="" />
          <p className="text-[20px] ">Website & Social Media Marketing</p>
        </div>
      </div>
      <div className="bg-white px-[80px] py-[80px] ">
        <div className="flex flex-col md:flex-row ">
          <p className="font-bold text-[22px] mb-[20px] md:mb-[0px] text-[#1E212C] md:w-[520px] ">
            Createx SEO Agency is a full-service digital marketing agency.
            We help businesses make more money through a wealth of performance
            data and market research. We create science-based SEO strategies
            to empower our clients.
          </p>
          <img src={aw} alt="" />
        </div>
        <div>
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
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white pb-[50px] px-[80px] ">
        <div>
          <h1 className="text-[46px] text-center md:text-start text-[#1E212C] font-bold ">
            Createx Agency{" "}
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
          <button className="md:ml-[0px] ml-[40px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
            More about us
          </button>
        </div>
        <img src={img10} alt="" />
      </div>
      <div className="bg-white flex-col md:flex-row px-[80px] pt-[10px] flex justify-center gap-[50px] pb-[50px] ">
        <img src={fig} className="mt-[10px] " alt="" />
        <img src={fig1} className="mt-[10px] " alt="" />
        <img src={fig2} className="mt-[10px] " alt="" />
        <img src={fig3} className="mt-[10px] " alt="" />
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
      <div className="bg-[#1E212C] flex flex-col md:flex-row justify-between px-[80px] py-[40px] ">
        <img src={il2} alt="" />
        <div>
          <h1 className="text-white text-[46px] font-bold ">
            Get a Free SEO Analysis!
          </h1>
          <div className="flex flex-col md:flex-row gap-[20px] ">
            <input
              type="text"
              placeholder="Your name"
              className="mt-[25px] md:mb-[10px] mb-[-10px] py-[5px] bg-[#FFFFFF1F] rounded-[4px] border-[#FFFFFF33] border-[1px] w-[246px] "
            />
            <input
              placeholder="Your working email"
              type="text"
              className="mt-[25px] mb-[10px] py-[5px] bg-[#FFFFFF1F] rounded-[4px] border-[#FFFFFF33] border-[1px] w-[246px] "
            />
          </div>
          <input
            placeholder="http://yoursite.com"
            type="text"
            className="w-[246px] md:w-[512px] mt-[25px] mb-[10px] py-[5px] bg-[#FFFFFF1F] rounded-[4px] border-[#FFFFFF33] border-[1px] "
          />
          <div className="mt-[20px] flex flex-col md:flex-row gap-[20px] md:gap-[0px] justify-between">
            <div className="flex items-start gap-[5px] ">
              <input type="checkbox" className="mt-[7px]" />
              <p className="md:w-[287px] ">
                I agree to receive communications from Createx SEO Agency
              </p>
            </div>
            <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
              Get a free analysis
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-[80px] gap-[30px] items-center flex flex-col md:flex-row px-[80px] ">
        <div>
          <h1 className="text-[#1E212C] text-[46px] font-bold ">
            Freequently Ask Questions
          </h1>
          <div className="flex mb-[10px] gap-[5px] ">
            <RemoveIcon color="info" />
            <div>
              <p className="font-bold text-[#1E212C] ">
                Aliquet lectus urna viverra in odio?
              </p>
              <p className="text-[#787A80] md:w-[556px] ">
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </div>
          </div>
          <div className="flex mb-[10px] gap-[5px] ">
            <AddIcon color="info" />
            <div>
              <p className="font-bold text-[#1E212C] ">
                Orci commodo, viverra orci mollis ut euismod?
              </p>
            </div>
          </div>
          <div className="flex mb-[10px] gap-[5px] ">
            <AddIcon color="info" />
            <div>
              <p className="font-bold text-[#1E212C] ">
                Sagittis vitae facilisi rutrum amet mauris quisque vel
                convallis?
              </p>
            </div>
          </div>
          <div className="flex mb-[10px] gap-[5px] ">
            <AddIcon color="info" />
            <div>
              <p className="font-bold text-[#1E212C] ">
                In id dolor quis nunc, urna hendrerit pharetra?
              </p>
            </div>
          </div>
          <button className="md:ml-[0px] bg-[#7772F1] mt-[40px] py-[10px] px-[30px] rounded-[4px] ">
            Discover more <ArrowRightAltIcon />
          </button>
        </div>
        <img src={il3} alt="" />
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
              <img className="md:block hidden" src={card2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black ">
            <div className="flex  ">
              <img src={card2} alt="" />
              <img src={card1} className="md:block hidden" alt="" />
              <img src={hover} className="md:block hidden" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-black ">
            <div className="flex  ">
              <img src={hover} alt="" />
              <img src={card2} className="md:block hidden" alt="" />
              <img src={card1} className="md:block hidden" alt="" />
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
      <div className="bg-white py-[80px] px-[80px] ">
        <h1 className="text-[#1E212C] text-[46px] mb-[40px] font-bold text-center ">
          Our benefits
        </h1>
        <div className="flex flex-col md:flex-row gap-[34px] ">
          <div className="md:ml-[0px] ml-[-40px] ">
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Social Advertising Experts
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className="border-[1px] my-[20px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic2} className="m-auto " alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                ROI Focused Campaigns
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Cursus sit eu viverra suspendisse eu quisque enim est tortor.
                Mauris ornare convallis nisi diam imperdiet.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic3} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Monthly Reporting
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio
                ultricies ornare ornare nunc venenatis mauris.
              </p>
            </div>
          </div>
          <img src={il4} alt="" />
          <div className="md:ml-[0px] ml-[-40px] ">
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic4} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Quality Customer Service
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus.
                Dictum tortor, pellentesque vel integer amet.
              </p>
            </div>
            <div className="border-[1px] my-[20px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic5} className="m-auto " alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                Complete SEO Transparency
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve
                niam velit nostrud aliquip sunt.
              </p>
            </div>
            <div className="border-[1px] border-[#E5E8ED] rounded-[4px] items-center flex flex-col gap-[0px] w-[320px] h-[237px] ">
              <img src={ic6} className="m-auto" alt="" />
              <h1 className="text-[#1E212C] font-bold text-[20px] text-center ">
                We're a True Partner
              </h1>
              <p className="text-[#787A80] text-[14px] m-auto text-center w-[294px] ">
                Quis sed malesuada tincidunt amet, vitae mi justo elementum eu.
                Dui gravida id elementum dolor sed elementum, risus.
              </p>
            </div>
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
      <div className="px-[80px] flex gap-[35px] flex-col md:flex-row py-[80px] bg-white ">
        <div>
          <h1 className="text-[#1E212C] text-[46px] ">Latest news</h1>
          <p className="text-[#424551] text-[20px] md:w-[285px] py-[20px] ">
            Check more posts in our blog for featured news and advertising
            insights
          </p>
          <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
            Go to blog
          </button>
        </div>
        <div className="flex gap-[30px] flex-col md:flex-row ">
          <div>
            <img src={pic} className="w-[320px] " alt="" />
            <p className="text-[#787A80] text-[14px] py-[10px] ">
              SEO | ⌚ July 5, 2020 | 🧑🏻 By Diane Mccoy
            </p>
            <h1 className="text-[#1E212C] text-[20px] font-bold md:w-[320px] ">
              How to Maximize Your ROI Through Scientific SEM?
            </h1>
            <h1 className="text-[#424551] mt-[10px] text-[16px] md:w-[320px] ">
              Vulputate vitae pellentesque scelerisque luctus consequat mattis
              pellentesque dui odio...
            </h1>
            <p className="mt-[30px] text-[#1E212C] ">
              Read more <ArrowRightAltIcon color="info" />{" "}
            </p>
          </div>
          <div>
            <img src={pic2} className="w-[320px] " alt="" />
            <p className="text-[#787A80] text-[14px] py-[10px] ">
              Marketing | ⌚ July 5, 2020 | 🧑🏻 By Diane Mccoy
            </p>
            <h1 className="text-[#1E212C] text-[20px] font-bold md:w-[320px] ">
              How to Maximize Your ROI Through Scientific SEM?
            </h1>
            <h1 className="text-[#424551] mt-[10px] text-[16px] md:w-[320px] ">
              Vulputate vitae pellentesque scelerisque luctus consequat mattis
              pellentesque dui odio...
            </h1>
            <p className="mt-[30px] text-[#1E212C] ">
              Read more <ArrowRightAltIcon color="info" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

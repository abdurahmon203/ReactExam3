import call2 from "./call2.svg";
import il from "./il.svg";
import il2 from "./il5.svg";
import il6 from "./il2.svg";
import il3 from "./il6.svg";
import il4 from "./il7.svg";
import il5 from "./il8.svg";
import ic from "./ic.svg";
import ic2 from "./ic2.svg";
import ic3 from "./ic3.svg";
import ic4 from "./ic4.svg";
import card1 from "./card1.svg";
import hover from "./hover.svg";
import card2 from "./card2.svg";
import log10 from "./log10.svg";
import log11 from "./log11.svg";
import log12 from "./log12.svg";
import log13 from "./log13.svg";
import log14 from "./log14.svg";
import log15 from "./log15.svg";
import pic from "./pic.svg";
import pic2 from "./pic2.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#FFF",
  width: "1000px",
  background: "#7772F1",
};

function Case() {
  return (
    <div>
      <div className="px-[80px] pb-[80px] ">
        <h1 className="text-[#FFFFFF] text-[42px] md:text-[72px] font-bold text-center ">
          Our services
        </h1>
        <p className="text-[#FFFFFF] text-[20px] md:w-[810px] text-center m-auto mt-[10px] mb-[30px] ">
          We offer more than services. Our agency provides solutions to your
          top-priority concerns, involving customer targeting, email performance
          and sales growth. If there is no existing solution readily available,
          we create one, specifically to suit your business.
        </p>
        <div className="flex m-auto justify-center gap-[50px] ">
          <button className="text-[#FFFFFF] border-[1px] rounded-[4px] border-[#FFFFFF] px-[40px] ">
            Start now
          </button>
          <img src={call2} alt="" />
        </div>
      </div>
      <div className="px-[80px] bg-[white] py-[80px] ">
        <div className="flex justify-between items-center flex-col md:flex-row ">
          <div>
            <h1 className="text-[#1E212C] text-[32px] font-bold ">
              Social Media Marketing
            </h1>
            <p className="text-[#787A80] text-[16px] md:w-[500px] ">
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
              lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
              sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget
              molestie. Turpis enim arcu, amet donec massa pellentesque nulla
              duis. Arcu dictum metus sed purus senectus faucibus eget elementum
              pretium.
            </p>
            <div className="flex gap-[50px] mt-[50px] text-center flex-col md:flex-row ">
              <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                Learn more
              </button>
              <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                Try SEO toolkit
              </button>
            </div>
          </div>
          <img src={il} className="w-[400px] " alt="" />
        </div>
        <div className="flex justify-between mt-[50px] items-center flex-col md:flex-row ">
          <img src={il2} className="w-[400px] " alt="" />
          <div>
            <h1 className="text-[#1E212C] text-[32px] font-bold ">
              Search Engine Optimization
            </h1>
            <p className="text-[#787A80] text-[16px] md:w-[500px] ">
              Elementum ipsum lorem tortor morbi quis turpis pellentesque
              ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus,
              eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique
              viverra tincidunt nec proin tempus egestas massa. Quis velit nunc
              nisl sem in tristique.
            </p>
            <div className="flex gap-[50px] mt-[50px] text-center flex-col md:flex-row ">
              <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                Learn more
              </button>
              <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                Try SEO toolkit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[50px] items-center flex-col md:flex-row ">
          <div>
            <h1 className="text-[#1E212C] text-[32px] font-bold ">
              Research Service
            </h1>
            <p className="text-[#787A80] text-[16px] md:w-[500px] ">
              Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet
              viverra in. Est nulla lectus purus tincidunt massa tortor.
              Hendrerit vulputate elementum blandit massa vitae amet felis eget.
            </p>
            <div className="flex gap-[50px] mt-[50px] text-center flex-col md:flex-row ">
              <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                Learn more
              </button>
              <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                Try SEO toolkit
              </button>
            </div>
          </div>
          <img src={il3} className="w-[400px] " alt="" />
        </div>
        <div className="flex justify-between mt-[50px] items-center flex-col md:flex-row ">
          <img src={il4} className="w-[400px] " alt="" />
          <div>
            <h1 className="text-[#1E212C] text-[32px] font-bold ">
              Content & PR Service
            </h1>
            <p className="text-[#787A80] text-[16px] md:w-[500px] ">
              Consequat pharetra elit posuere fringilla luctus sit. Curabitur
              accumsan fermentum magna amet. Sed nec amet posuere tellus
              pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet,
              sit aliquet magna in viverra at elit nullam.
            </p>
            <div className="flex gap-[50px] mt-[50px] text-center flex-col md:flex-row ">
              <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                Learn more
              </button>
              <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                Try SEO toolkit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[50px] items-center flex-col md:flex-row ">
          <div>
            <h1 className="text-[#1E212C] text-[32px] font-bold ">
              Payed Traffic Management
            </h1>
            <p className="text-[#787A80] text-[16px] md:w-[500px] ">
              Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus
              ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut
              mattis dis nullam ultrices amet. Lacus eu neque arcu arcu
              curabitur at sapien. Id sed aliquet id sit nibh ornare massa
              scelerisque.
            </p>
            <div className="flex gap-[50px] mt-[50px] text-center flex-col md:flex-row ">
              <button className="border-1 border-[#7772F1] text-[#7772F1] rounded-[4px] px-[30px] py-[10px] ">
                Learn more
              </button>
              <button className="md:ml-[0px] bg-[#7772F1] py-[10px] px-[30px] rounded-[4px] ">
                Try SEO toolkit
              </button>
            </div>
          </div>
          <img src={il5} className="w-[400px] " alt="" />
        </div>
      </div>
      <div className="bg-[#1E212C] flex flex-col md:flex-row justify-between px-[80px] py-[40px] ">
        <img src={il6} alt="" />
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
      <div className="bg-white px-[80px] py-[80px] ">
        <h1 className="text-[#1E212C] font-bold text-[46px] text-center ">
          Markets in which we operate
        </h1>
        <div className="flex flex-col mt-[20px] md:flex-row justify-center gap-[20px] ">
          <div className="text-center md:border-r-[1.5px] md:pr-[10px] md:border-r-[#DADBDD80] ">
            <img src={ic} alt="" className="m-auto" />
            <h1 className="text-[#1E212C] py-[10px] text-[20px] font-bold text-center ">
              E-commerce Websites
            </h1>
            <p className="text-[#787A80] text-[16px] m-auto md:w-[250px] ">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
            </p>
          </div>
          <div className="text-center md:border-r-[1.5px] md:pr-[10px] md:border-r-[#DADBDD80] ">
            <img src={ic2} alt="" className="m-auto" />
            <h1 className="text-[#1E212C] py-[10px] text-[20px] font-bold text-center ">
              Content-rich Websites
            </h1>
            <p className="text-[#787A80] text-[16px] m-auto md:w-[250px] ">
              Culpa nostrud commodo ea consequat reprehenderit aliquip.{" "}
            </p>
          </div>
          <div className="text-center md:border-r-[1.5px] md:pr-[10px] md:border-r-[#DADBDD80] ">
            <img src={ic3} alt="" className="m-auto" />
            <h1 className="text-[#1E212C] py-[10px] text-[20px] font-bold text-center ">
              B2B /B2C Services
            </h1>
            <p className="text-[#787A80] text-[16px] m-auto md:w-[250px] ">
              Viverra scelerisque consequat net. Adipisicing esse consequat.{" "}
            </p>
          </div>
          <div className="text-center border-r-[1.5px] ">
            <img src={ic4} alt="" className="m-auto" />
            <h1 className="text-[#1E212C] py-[10px] text-[20px] font-bold text-center ">
              Startup Projects
            </h1>
            <p className="text-[#787A80] text-[16px] m-auto md:w-[250px] ">
              Aute eiusmod dolore dolore deserunt veniam ad deserunt.{" "}
            </p>
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

export default Case;

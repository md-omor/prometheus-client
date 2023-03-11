import React from "react";

const Hero = () => {
  return (
    <div class="w-full px-3 md:px-20 mt-[100px]">
      <div className="container mx-auto ">
        <div className="flex justify-between flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-auto md:mt-[75px]">
            <h1 className="text-[#52C9FE] font-primary md:text-2xl text-xl font-medium ">
              Best place to refund
            </h1>
            <p className="text-[#010E82] font-primary text-5xl leading-[72px] md:text-[56px] mD:leading-[84px] font-bold w-full md:w-[682px] mt-2 md:mt-4">
              We can refund Amazon-Nike-Zalando And More
            </p>
            <div className="">
              <img src="/images/banner-2.svg" alt="banner" />
            </div>
            <div className="flex mt-6 justify-between md:justify-start">
              <button className="bg-[#010E82] text-white font-primary font-medium  text-base px-[66px] py-4 rounded-[10px]">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-[757px] md:h-[539px] w-full h-full mt-[100px] md:mt-0">
            <img src="/images/hero.svg" alt="heroImg" />
          </div>
        </div>

        <div className="flex md:space-y-0 space-y-[100px] md:flex-row flex-col w-full justify-evenly flex-wrap items-center my-[30px]">
          <div className="w-[70px] h-[72px]">
            <img
              src="/images/amazon.svg"
              alt="amazon"
              className="w-full h-full"
            />
          </div>
          <div className="w-[200px] h-[72px]">
            <img src="/images/nike.svg" alt="nike" className="w-full h-full" />
          </div>
          <div className="w-[70px] h-[72px]">
            <img
              src="/images/zalando.svg"
              alt="zalando"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

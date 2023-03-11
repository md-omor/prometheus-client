import { Burger } from "@mantine/core";
import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <nav class="w-full px-3 md:px-[120px] ">
      <div class="mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap py-9 md:py-0 md:pt-[46px]">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0  pr-2 ">
          <div class="flex items-center flex-shrink-0 mr-16">
            <a href="/">
              <img src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div class="block lg:hidden ">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="#000000"
            />
          </div>
        </div>

        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <div
            class={
              opened
                ? "menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-6 md:relative absolute md:top-0 md:left-0 top-[80px] -left-[0] z-50 bg-[#EBF8FE]  transition duration-[0.4s] ease-in-out rounded-[0px,0px,15px,15px] pb-[90px]"
                : "-z-50 menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-6 md:relative absolute md:top-0 md:left-0 top-[80px] -left-[110%] transition duration-[0.4s] ease-in-out"
            }
          >
            <ul class="flex font-semibold justify-between md:flex-row flex-col">
              <li class="md:px-[25px] md:py-0 textbase cursor-pointer font-primary font-medium  text-black md:text-[#010E82]  md:p-0 py-[25px]">
                Home
              </li>
              <li class="md:px-[25px] md:py-0  text-base cursor-pointer font-primary font-medium text-black md:text-[#010E82]  md:p-0 py-[25px]">
                Store list
              </li>
              <li class="md:px-[25px] md:py-0  text-base cursor-pointer font-primary font-medium text-black md:text-[#010E82] md:p-0 py-[25px]">
                Place Your Order
              </li>
              <li class="md:px-[25px] md:py-0  text-base cursor-pointer font-primary font-medium text-black md:text-[#010E82]  md:p-0 py-[25px]">
                Contact
              </li>
              <li class="md:px-[25px] md:py-0  text-base cursor-pointer font-primary font-medium text-black md:text-[#010E82]  md:p-0 py-[25px]">
                FAQ
              </li>
            </ul>
            <div class="order-2 md:order-3 flex items-center md:hidden md:m-0 mt-5">
              <button class="btn py-4 pr-[50px] font-primary font-medium text-base text-black">
                Profile
              </button>
              <button class="py-3 text-white font-primary font-medium rounded-[10px] px-[50px] bg-[#010E82]">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div class="order-2 md:order-3 md:flex hidden items-center">
          <button class="btn py-4 px-[50px] font-primary font-medium text-lg">
            Profile
          </button>
          <button class="py-3 text-white font-primary font-medium rounded-[10px] px-[50px] bg-[#010E82]">
            Sign in
          </button>
          {/* <button class="py-3 text-white font-primary font-medium rounded-[10px] px-[50px] bg-[#010E82]">
            Logout
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

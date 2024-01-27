import React from "react";
import { NavBar } from "@/components/ButtomClick";
import { TextHome } from "@/app/HomePortfoli/components/TextHome";
import { ButtonsNavbar } from "@/components/SelectBackground";
import Image from "next/image";

export default function ShowNavBar() {


  const [isNavBarVisible, setIsNavBarVisible] = React.useState(false);


  return (
      <div className="" >
        <div className="relative  bg-black overflow-hidden " >
          {!isNavBarVisible && (
            <>
              <div className="absolute flex items-center justify-center w-full h-auto 3xs:pt-10 2xs:pt-16 xs:pt-24 sm:pt-14 md:pt-20 ">
                <div className=" w-full h-auto 3xs:scale-y-150 2xs:scale-y-150 xs:scale-y-150 sm:scale-y-125 md:scale-y-125 scale-y-100 " >
                  <Image className=" opacity-45 "  
                  src="/background_002.jpg " 
                  alt="" 
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  >
                  </Image>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-3/4"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                  }}>
              </div>
            </>
          )}
          <div className=' relative px-8 pt-10 pb-20'>
            <ButtonsNavbar setIsNavBarVisible={setIsNavBarVisible} isNavBarVisible={isNavBarVisible}></ButtonsNavbar>
          </div>
          {!isNavBarVisible && (
            <div className="relative" style={{ background: "transparent" }}>
              <TextHome ></TextHome>
            </div>
            )}
        </div>
        {isNavBarVisible && (
        <div className='flex items-center justify-center'>
            <div className={`transition-transform  ${isNavBarVisible ? 'translate-y-0  duration-1000 visible' : 'translate-y-full duration-1000 invisible '} animate-pulse`}>
              <NavBar></NavBar>
            </div>
        </div>
        )}
      </div>
  );
}


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
              <div className="absolute flex items-center justify-center w-full h-full gutyxs:pt-10 guty2xs:pt-5 pt-0 ">
                <div className=" w-full gutyxs:h-5/6 guty2xs:h-5/6 h-full gutyxs:scale-y-150 guty2xs:scale-y-125 scale-y-100 " >
                  <Image className=" opacity-45 "  
                  src="/background_002.jpg" 
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
          <div className=' relative gutyxs:px-0 px-8 gutyxs:pb-0 pb-20 gutyxs:pt-0  guty2xs:pt-10  pt-20'>
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


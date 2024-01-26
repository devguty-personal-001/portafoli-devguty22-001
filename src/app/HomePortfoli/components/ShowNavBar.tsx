import React from "react";
import { NavBar } from "@/components/ButtomClick";
import { TextHome } from "@/app/HomePortfoli/components/TextHome";
import { ButtonsNavbar } from "@/components/SelectBackground";
import Image from "next/image";

export default function ShowNavBar() {


  const [isNavBarVisible, setIsNavBarVisible] = React.useState(false);


  return (
      <div className="" >
        <div className="relative pt-20 pb-20 bg-black overflow-hidden" >
          {!isNavBarVisible && (
            <>
              <Image className="absolute  opacity-45 bg-gradient-to-b"  
              src="/background_002.jpg" 
              alt="" fill
              style={{objectFit: 'cover',objectPosition:"left"}}>
              </Image>
              <div className="absolute inset-x-0 bottom-0 h-3/4"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                  }}>
              </div>
            </>
          )}
          <div className=' relative px-8 '>
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


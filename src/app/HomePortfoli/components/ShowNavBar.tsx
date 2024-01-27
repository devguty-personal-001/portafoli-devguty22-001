import React from "react";
import { NavBar } from "@/components/ButtomClick";
import { TextHome } from "@/app/HomePortfoli/components/TextHome";
import { ButtonsNavbar } from "@/components/SelectBackground";
import Image from "next/image";

export default function ShowNavBar() {


  const [isNavBarVisible, setIsNavBarVisible] = React.useState(false);


  return (
      <div className="" >
        <div className="relative overflow-hidden " >
          {!isNavBarVisible && (
            <>
              <div className="absolute w-full h-full ">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden" >
                    <Image className=" object-cover object-top opacity-45 "  
                    src="/background_002_001.png" 
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


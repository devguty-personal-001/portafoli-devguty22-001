import {ButtomClick, BarSocialMedia} from './ButtomClick';
import { HamburgerIcon,CloseIcon,HomeButton } from "@/components/SVGIcons";
import { useRouter } from 'next/navigation'
import React from "react";



interface ButtonsNavbarProps {
  setIsNavBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isNavBarVisible: boolean;
}

export function ButtonsNavbar({ setIsNavBarVisible, isNavBarVisible }: ButtonsNavbarProps) {
    const router = useRouter()
    const handleButtonClick = () => {
      router.push('/HomePortfoli');
    };

  const handleHamburgerClick = () => {
    setIsNavBarVisible(true);
  };

  const handleCloseClick = () => {
    setIsNavBarVisible(false);
  };

  return (
    <div>
      <div className="grid grid-cols-3 3xs:gap-0 2xs:gap-0 xs:gap-0 gap-4 gutyxs:pt-12 guty2xs:pt-7 pt-10">
        <div className='flex  items-center justify-center'>
          {!isNavBarVisible && (
            <div className='scale-x-150 scale-y-125'>
              <ButtomClick 
              icon={<HamburgerIcon width={48} height={48}></HamburgerIcon>} 
              handleHamburgerClick={handleHamburgerClick}>
              </ButtomClick>
            </div>
          )}
          {isNavBarVisible && (
            <div className='scale-y-150 scale-x-150'>
              <ButtomClick 
              icon={<CloseIcon width={48} height={48}></CloseIcon>} 
              handleHamburgerClick={handleCloseClick}>
              </ButtomClick>
            </div>
          )}
        </div>
        <div className='flex  items-center justify-center scale-y-125 scale-x-150'>
          <ButtomClick 
            icon={<HomeButton width={24} height={24}></HomeButton>} 
            handleHamburgerClick={handleButtonClick}>
          </ButtomClick>
        </div>
        <div className='flex  items-center justify-center'>
          <BarSocialMedia></BarSocialMedia>
        </div>
      </div>
    </div>
  );
}
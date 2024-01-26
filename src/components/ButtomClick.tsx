import { Button} from "@nextui-org/react";
import { ReactElement, MouseEvent } from "react";
import React from "react";
import { NavBarTitle } from '@/components/NavBarTittle';
import { LinkedinIcon,TiktokIcon, GithubIcon } from "@/components/SVGIcons";
import { useRouter } from 'next/navigation';


interface NavBarTitleProps {
  icon: ReactElement;
  handleHamburgerClick: (event: MouseEvent) => void;
}


export function ButtomClick({ icon,handleHamburgerClick }: NavBarTitleProps) {
  return (
    <div className='animate-bounce'>
      <Button  isIconOnly className="bg-transparent" 
      onClick={handleHamburgerClick}>
        {React.cloneElement(icon, { width: 48, height: 48 })}
      </Button>    
    </div>
  )
}

export function NavBar() {
  return (
    <div className='min-h-screen bg-black'>
      <nav>
        <div>
          <ul className='flex flex-col'>
              <NavBarTitle href="HomePortfoli"></NavBarTitle>
              <NavBarTitle href="About"></NavBarTitle>
              <NavBarTitle href="Blog"></NavBarTitle>
              <NavBarTitle href="Portfolio"></NavBarTitle>
              <NavBarTitle href="Contact"></NavBarTitle>
          </ul>
          <div className='pt-24 pb-4 flex items-center justify-center'>
            <div></div>
            <a className='text-sm font-sans font-semibold'>
              <div>joelguty22@gmail.com</div>
            </a>
          </div>
        </div>
      </nav>
      </div>
  );
}

export function BarSocialMedia() {
  const router = useRouter();

  const handleClick = (linkedinUrl: string) => {
    router.push(linkedinUrl);
  };

  return (
    <div className="flex  items-center justify-center animate-bounce w-1/3 gap-4 ">
      <Button className="bg-transparent" isIconOnly 
      onClick={() => handleClick("https://www.linkedin.com/in/miguel-g-452566184/")}>
        <div className="scale-y-150 scale-x-150">
          <LinkedinIcon width={24} height={24}></LinkedinIcon>
        </div>
      </Button>    
      <Button className="bg-transparent" isIconOnly 
      onClick={() => handleClick("https://github.com/joelguty1234")}>
        <div className="scale-y-150 scale-x-150">
          <GithubIcon width={40} height={40}></GithubIcon>
        </div>
      </Button>
      <Button className="bg-transparent" isIconOnly 
      onClick={() => handleClick("https://www.tiktok.com/@devguty33")}>
        <div className="scale-y-150 scale-x-150">
          <TiktokIcon width={24} height={24}></TiktokIcon>
        </div>
      </Button>
    </div>
  );
}


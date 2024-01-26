import Image from 'next/image';

interface NavBarTitleProps {
  href: string;
}


export function NavBarTitle({ href }: NavBarTitleProps) {
  return (
    <li className='items-center'>
      <a href={`/${href}`} 
        className='max-w-[1360px] flex items-center justify-center 
        text-4xl font-sans font-semibold
        py-4'>
        {href}
        <Image
          className='transform -translate-x-2 -translate-y-2 scale-50 rotate-180 skew-x-0 skew-y-0'
          src="arrow.svg"
          width={40}
          height={40}
          alt=""
        />
      </a>
    </li>
  );
}



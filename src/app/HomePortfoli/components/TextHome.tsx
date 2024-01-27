
import Image from "next/image";

export function TextHome() {
  return (
    <div className='flex items-center justify-center text-white'>
        <div className='w-2/3 text-clip gutyxs:py-0 guty2xs:py-16 py-32' >
          <h1 className='gutyxs:text-2xl text-7xl py-4 font-extrabold text-left'>Hello there, I`m</h1>
          <h2 className='gutyxs:text-4xl text-9xl py-4 font-extrabold text-left'>Miguel Gutierrez</h2>
          <h2 className='gutyxs:text-2xl text-7xl py-4 font-extrabold text-left'>a Data Engineer from Latam</h2>
          <div className="gutyxs:w-full w-3/5">
            <p className='gutyxs:text-sm text-2xl text-justify py-4 y' >
            Experienced engineer with a master`s degree and over 8 years in BIG DATA, 
            specializing in data transformation, project leadership, and innovation across industries. 
            Currently pursuing a doctoral program.
            </p>
          </div>
        </div>
      </div>
  );
}

export function DescriptiontHome() {
  return (
    <div>
      <div className="relative  pb-28 bg-black overflow-hidden">
        <div className="absolute w-full h-full">
          <div className=" relative w-full h-full">
            <div className=" absolute inset-0  w-full h-auto flex items-center justify-center  3xs:pt-10 2xs:pt-16 xs:pt-24 sm:pt-14 md:pt-20">
              <div className="  w-full gutyxs:h-3/4 h-auto 3xs:scale-y-150 2xs:scale-y-150 xs:scale-y-150 sm:scale-y-125 md:scale-y-125 scale-y-100 ">
                <Image className="opacity-50 " 
                  src="/background_003.jpg" 
                  alt="" 
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  >
                </Image>
              </div>
            </div>
            <div className="absolute  inset-x-0 bottom-0 h-1/3"
                style={{
                  background: ' linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
                }}>
            </div>
            <div className="absolute  inset-x-0 top-0  h-1/3"
                style={{
                  background: ' linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                }}>
            </div>
          </div>
        </div>
        <div className="relative  flex items-center justify-center">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-start-2 row-span-2 py-1">
              <div className="flex items-center justify-around" > 
                <div className="gutyxs:w-11/12 w-3/5">
                  <p className='gutyxs:text-4xl text-8xl  font-extrabold text-left py-4'>My story</p>
                  <p className='gutyxs:text-xs text-2xl text-justify py-4 ' >
                    Embarking on a journey that began with academic rigor, I earned a Master`s degree and 
                    obtained official recognition from the College of Engineers of Peru. Over the years, 
                    I`ve honed my skills as a BIG DATA ENGINEER, DATA ARCHITECT, and FULL STACK DEVELOPER,
                     making significant contributions in sectors such as banking-finance, mining, and 
                     industrial plants. My narrative evolves with an unwavering commitment to digital 
                     transformation, leading global projects that enhance operational efficiency. 
                     Amidst this, I am pursuing a doctoral program, seamlessly blending my BIG DATA 
                     expertise with the complexities of quantitative finance.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-start-1 row-span-2 py-1">
              <div className="flex items-center justify-around "> 
                <div className="gutyxs:w-11/12 w-3/5">
                  <p className='gutyxs:text-4xl text-8xl font-extrabold text-left py-4'>About Me</p>
                  <p className='gutyxs:text-xs text-2xl text-justify pt-4 py-4' >
                  I am a dedicated professional in the realm of data engineering, holding a Master`s degree 
                  and accredited by the College of Engineers of Peru (CIP: 273242). With over 8 years of 
                  experience, my expertise spans BIG DATA ENGINEERING, DATA ARCHITECTURE, and FULL STACK 
                  DEVELOPMENT. Passionate about the digital transformation of data, I thrive in sectors 
                  like banking-finance, mining, and industrial plants. Always seeking innovation, I am 
                  currently engaged in a doctoral program that merges my BIG DATA insights with quantitative 
                  finance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-10">
                <div className="flex items-end justify-end py-4">
                  <div className="gutyxs:w-11/12 w-3/5">
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                      <p className="gutyxs:text-4xl text-9xl font-extrabold text-left">8+</p>
                      <p className="gutyxs:text-lg text-3xl font-extrabold text-left">Years of experience</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start py-4">
                  <div className="gutyxs:w-11/12 w-3/5">
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                      <p className="gutyxs:text-4xl text-9xl font-extrabold text-left">100+</p>
                      <p className="gutyxs:text-lg text-3xl font-extrabold text-left">Completed Porjects+</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
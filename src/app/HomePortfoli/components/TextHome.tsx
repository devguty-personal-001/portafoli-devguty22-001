
import Image from "next/image";

export function TextHome() {
  return (
    <div className='flex items-center justify-center text-white'>
        <div className='gutylg:w-10/12 w-2/3 text-clip gutyxs:py-0 guty2xs:py-16 py-32' >
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
      <div className="relative  overflow-hidden">
        <div className="absolute w-full h-full">
          <div className=" w-full h-full ">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden ">
              <div className=" w-5/6 h-full ">
                <Image className="object-cover opacity-60 " 
                  src="/background_003_002.png" 
                  alt="" 
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  >
                </Image>
              </div>
            </div>
          </div>
        </div>
        <div className="relative gutyxs:pb-10 guty2xs:pb-16 gutyxs:pt-10 guty2xs:pt-20 pt-72 flex items-center justify-center ">
          <div className="grid gutylg:grid-rows-2 grid-rows-3 grid-flow-col gap-4">
            <div className="guty2lg:row-start-1 row-start-2 guty2lg:row-span-1 row-span-2 py-1">
              <div className="flex items-center justify-around" > 
                <div className="gutyxs:w-11/12 guty2xs:w-10/12 w-9/12">
                  <p className='guty2lg:text-3xl text-8xl  font-extrabold text-left guty2lg:py-1 py-4'>My story</p>
                  <p className='guty2lg:text-xs text-2xl text-justify guty2lg:py-0 py-4 ' >
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
            <div className="guty2lg:row-start-2 guty2lg:row-span-1 row-start-1 row-span-2 py-1">
              <div className="flex items-center justify-around "> 
                <div className="gutyxs:w-11/12 guty2xs:w-10/12 w-9/12">
                  <p className='guty2lg:text-3xl text-8xl font-extrabold text-left guty2lg:py-1 py-4'>About Me</p>
                  <p className='guty2lg:text-xs text-2xl text-justify pt-4 guty2lg:py-0 py-4 ' >
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
              <div className="grid grid-cols-2 gap-4 guty2lg:py-1 py-10">
                <div className="flex items-end justify-end  gutylg:py-0 py-4">
                  <div className="gutyxs:w-11/12 guty2xs:w-10/12 w-9/12">
                    <div className="grid grid-rows-2 grid-flow-col guty2lg:gap-1 gap-4 ">
                      <p className="guty2lg:text-xl text-9xl font-extrabold text-left">8+</p>
                      <p className="guty2lg:text-xs text-3xl font-extrabold text-left">Years of experience</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start gutylg:py-0 py-4">
                  <div className="gutyxs:w-11/12 guty2xs:w-10/12 w-9/12">
                    <div className="grid grid-rows-2 grid-flow-col guty2lg:gap-1 gap-4">
                      <p className="guty2lg:text-xl text-9xl font-extrabold text-left">100+</p>
                      <p className="guty2lg:text-xs text-3xl font-extrabold text-left">Completed Porjects+</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
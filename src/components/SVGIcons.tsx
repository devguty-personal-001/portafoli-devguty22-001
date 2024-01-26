import React from "react";

interface CloseIconProps {
  width: number ; 
  height: number ;
}

export const HamburgerIcon: React.FC<CloseIconProps> = ({ width, height }) => {
  
  return (
    <div >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
        width={width} height={height} fill="none" 
        stroke="white" strokeWidth="4" 
        strokeLinecap="round" strokeLinejoin="round"
        className="">
        <path d="M3 7h18M3 14h18" id="theMotionPath"></path>
        <animateTransform 
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="180 0 0"
            dur="0.2s"
            repeatCount="1"
          />
      </svg>
    </div>

  );
};

export const CloseIcon: React.FC<CloseIconProps> = ({ width, height }) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" width={width} height={height}
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
        <animateTransform 
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="180 0 0"
            dur="0.2s"
            repeatCount="1"
          />
      </svg>
    </div>
  );
};

export const HomeButton: React.FC<CloseIconProps> = ({ width, height }) => {
  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M8.73881 22.4091C11.7457 21.8937 14.8157 22.8697 16.973 25.0269V25.0269C19.1302 27.1841 20.1062 30.2542 19.5908 33.2611L18.5308 39.4451L2.5548 23.4691L8.73881 22.4091Z" 
          fill="white"/>
        <path 
          d="M19.5905 8.73868C20.106 11.7456 19.1299 14.8156 16.9727 16.9728V16.9728C14.8155 19.1301 11.7455 20.1061 8.73855 19.5907L2.55455 18.5306L18.5305 2.55468L19.5905 8.73868Z" 
          fill="white"/>
        <path 
          d="M33.261 19.5908C30.254 20.1062 27.184 19.1302 25.0268 16.973V16.973C22.8696 14.8157 21.8935 11.7457 22.409 8.7388L23.469 2.55479L39.445 18.5308L33.261 19.5908Z" 
          fill="white"/>
        <path 
          d="M22.4092 33.2612C21.8938 30.2543 22.8698 27.1843 25.027 25.027V25.027C27.1843 22.8698 30.2543 21.8938 33.2612 22.4092L39.4452 23.4692L23.4692 39.4452L22.4092 33.2612Z" 
          fill="white"/>
      </svg>
    </div>

  );
};


export const LinkedinIcon: React.FC<CloseIconProps> = ({ width, height }) => {
  return (
    <div>
      <svg fill="white" width={width} height={height}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
        <g id="XMLID_801_">
          <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
            C77.16,101.969,74.922,99.73,72.16,99.73z"/>
          <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
            c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
          <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
            c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
            c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
            C310,145.43,300.549,94.761,230.454,94.761z"/>
        </g>
      </svg>
    </div>
  )
}


export const TiktokIcon: React.FC<CloseIconProps> = ({ width, height }) => {
  return (
    <div>
      <svg 
        fill="white" width={width} height={height}
        viewBox="0 0 512 512" id="icons" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
      </svg>
    </div>
  )
}
  
export const GithubIcon: React.FC<CloseIconProps> = ({ width, height }) => {
  return (
    <div>
      <svg 
        fill="white" width={width} height={height}
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m12 2c-5.525 0-10 4.475-10 10 0 4.425 2.8625 8.1625 6.8375 9.4875.5.0875.6875-.2125.6875-.475 0-.2375-.0125-1.025-.0125-1.8625-2.5125.4625-3.1625-.6125-3.3625-1.175-.1125-.2875-.6-1.175-1.025-1.4125-.35-.1875-.85-.65-.0125-.6625.7875-.0125 1.35.725 1.5375 1.025.9 1.5125 2.3375 1.0875 2.9125.825.0875-.65.35-1.0875.6375-1.3375-2.225-.25-4.55-1.1125-4.55-4.9375 0-1.0875.3875-1.9875 1.025-2.6875-.1-.25-.45-1.275.1-2.65 0 0 .8375-.2625 2.75 1.025.8-.225 1.65-.3375 2.5-.3375s1.7.1125 2.5.3375c1.9125-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.6375.7 1.025 1.5875 1.025 2.6875 0 3.8375-2.3375 4.6875-4.5625 4.9375.3625.3125.675.9125.675 1.85 0 1.3375-.0125 2.4125-.0125 2.75 0 .2625.1875.575.6875.475 1.9852-.6702 3.7102-1.946 4.9323-3.648 1.2221-1.7019 1.8797-3.7442 1.8802-5.8395 0-5.525-4.475-10-10-10z" fillRule="evenodd" stroke="#000" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}
  
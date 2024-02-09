import Link from 'next/link';
import React from 'react'

type BtnLightProps = {
  circle: boolean;
    props?: string;
    icon?: boolean;
    link?: string;
}

const BtnLight = ({circle, props, icon, link}: BtnLightProps) => {
  return (
    <Link href={`${link}`}>
      <button className={` bg-white  rounded-full flexBetween m-1 ${props === "Kontakt" ? " " : "hover:-translate-y-1 duration-300 transition-all"}`}>
          {props && <p className='text-blue-10 px-6 py-[0.9rem] regular-btn'>{props}</p>}
          { circle &&   <div className='bg-blue-30 w-[45px] h-[45px] m-1 flexCenter rounded-full'>
                          {icon ? <svg width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h16M0 6h16M0 11h12" stroke="#044F76" stroke-width="2"/></svg> : <svg width="11" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 8 8.5L1 18" stroke="#044F76" stroke-width="2.5"/></svg>}
                        </div> 
          }
      </button>     
    </Link>
  )
}

export default BtnLight

{/* <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
<span class="relative invisible">Button Text</span>
</a> */}
import Link from 'next/link';
import React from 'react'

type BtnDarkProps = {
    circle: boolean;
    props: string;
    link?: string;
    type?: "submit";
}

const BtnDark = ({circle, props, link, type}: BtnDarkProps) => {
  return (
    <Link href={`${link}`}>
      <button className=' bg-blue-10 rounded-full flex hover:-translate-y-1 duration-300 transition-all ' type={type}>
          <p className='text-white px-6 self-center regular-btn'>{props}</p>
          { circle &&   <div className='bg-white w-[43px] h-[43px] m-1 flexCenter rounded-full'>
                          <svg width="11" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 8 8.5L1 18" stroke="#044F76" stroke-width="2.5"/></svg>
                        </div> 
          }
      </button> 
    </Link>
  )
}

export default BtnDark
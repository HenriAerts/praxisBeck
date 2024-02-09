import React from 'react'
import Link from 'next/link'

type BtnMiddleProps = {
    circle: boolean;
    props: string;
    link?: string;
}

const BtnMiddle = ({circle, props, link}: BtnMiddleProps) => {
  return (
    <Link href={`${link}`} className='flex'>
      <button className='bg-blue-30 rounded-full flex duration-300 transition-all hover:-translate-y-1 '>
          <p className='text-blue-10 px-6 self-center regular-btn'>{props}</p>
          { circle &&   <div className='bg-white w-[45px] h-[45px] m-1 flexCenter rounded-full'>
                          <svg width="11" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 8 8.5L1 18" stroke="#044F76" stroke-width="2.5"/></svg>
                        </div> 
          }
      </button>       
    </Link>
  )
}

export default BtnMiddle
"use client"

import { useState } from "react";
import Image from "next/image";

type ServiceProps = {
    header: string,
    paragraph: string
}

const QAContainer = ({header, paragraph}: ServiceProps) => {
    const [description, setDiscription] = useState(false)
  return (
    <>
        <div onClick={() => setDiscription((shown)=>!shown)} className="flex-col gap-5 flexBetween p-8 bg-white rounded-[30px] cursor-pointer hover:-translate-y-1 duration-300 transition-all">
            <div className='flexBetween items-center gap-4'>
                <h3 className='regular-h5 text-blue-10  '>{header}</h3>
                <Image src="/Dinge/plus.svg" className={`size-6 md:size-8  ${description ? 'rotate-[135deg]' : 'rotate-[90deg]'} ease-in-out duration-300`} alt="arrow" width={0} height={0}/>
            </div>
            {description ? <p className='regular-p pt-4 text-blue-10'>{paragraph}</p> : null }
        </div>
    </>
  )
}

export default QAContainer


import React from 'react'

type BewertungsProps = {
    bewertung: string;
    name: string;
}

const BewertungsContainer = ({bewertung, name}: BewertungsProps) => {
  return (
    <>
      <div className="flex-col gap-5 flexBetween p-5 bg-gray-10 rounded-[30px]">
          <p className='regular-p1  text-blue-10'>{bewertung}</p>
          <div className='self-end'>
              <h5 className='text-[14px] font-[500] md:text-[16px] leading-normal text-blue-10'>{name}</h5>
              <div></div>
          </div>
      </div>
    </>
  )
}

export default BewertungsContainer
import React from 'react'
import BtnLight from '../BtnLight'

const Praxis = () => {
  return (
    <section className=' max-container padding-container py-4'>
        <div className="p-8 flex-col md:flex-row flexBetween bg-blue-30 rounded-[40px] w-full xs:gap-10 md:gap-3">
            <div className='grid grid-cols-2 grid-row-3 gap-3 md:w-1/2 min-h-[500px]'>
                <div className='row-span-2  p-8 bg-white rounded-[30px] bg-praxis-1 bg-cover bg-no-repeat'></div>
                <div className='row-span-1  p-8 bg-white rounded-[30px] bg-praxis-2 bg-bottom bg-cover bg-no-repeat'></div>
                <div className='row-span-2  p-8 bg-white rounded-[30px] bg-praxis-4 bg-cover bg-no-repeat'></div>
                <div className='row-span-1  p-8 bg-white rounded-[30px] bg-praxis-5 bg-center bg-cover bg-no-repeat'></div>
            </div>
            
            <div className='md:w-1/2'>
                <div className='mt-10 mb-20 md:mb-24 px-8 flex flex-col gap-10'>
                    <h2 className='regular-h2 leading-tight text-blue-10 self-start'>
                    Unsere <br /> Praxis
                    </h2>
                    <BtnLight
                        link= "https://www.google.de/maps/preview"
                        circle= {true}
                        props='Auf Maps finden'
                    />
                </div>
                <div className='w-full'>
                    <div className='px-8 py-28 bg-white rounded-[30px] bg-praxis-3 bg-bottom bg-cover bg-no-repeat'></div>
                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default Praxis
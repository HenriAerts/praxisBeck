import React from 'react'
import BtnDark from '../BtnDark'

const CallToAction = () => {
  return (
<section className='max-container padding-container py-4'>
        <div className='flex lg:grid grid-cols-2 grid-rows-2 gap-3 bg-white rounded-[40px] p-8 lg:h-[580px]'>

            <div className='hidden overflow-hidden rounded-[30px] lg:flex justify-center items-center'>
                <img src="/Medizinisch/pexels-pietro-jeng-360622.jpg" alt="" className='mx-auto'/>
            </div>


            <div className='flex flex-col  gap-10 lg:flex-row lg:flexBetween lg:flex-wrap lg:ml-8 row-span-2 '>
                <h2 className='regular-h2 leading-tight text-blue-10 mb-18 lg:mb-36'>
                    Nehmen Sie gerne Kontakt auf
                </h2>
                <div className='w-full'>
                    <div className='flex flex-col flexCenter lg:flex-row gap-5 lg:gap-3'>
                        <BtnDark
                            circle= {true}
                            props='info@beckpraxis.com'
                        />         
                        <BtnDark
                            circle= {true}
                            props='+49 1789 1223456'
                        />  
                    </div>       
                </div>
            </div>


            <div className='hidden overflow-hidden rounded-[30px] lg:flex justify-center items-center'>
                <img src="/Medizinisch/Screenshot.jpg" alt="" className='mx-auto'/>
            </div>



        </div>
    </section>
  )
}

export default CallToAction
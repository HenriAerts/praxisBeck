import React from 'react'
import Form from './Form'

const KontaktFormular = () => {
  return (
    <section className=' max-container padding-container py-4'>
        <div className="p-8 flex-col flexBetween bg-blue-30 rounded-[40px] w-full ">
            <h2 className='regular-h2 leading-tight text-blue-10 mb-16 md:mb-36'>
                Kontakt<br/>aufnehmen
            </h2>
            <div className='flex flex-col md:flex-row gap-3 lg:gap-5'>

                <div className='w-full md:w-3/5 border-2 border-red-500 bg-white rounded-[30px] p-16'>
                    <Form/>
                </div>
                <div className=' md:w-2/5 border-2 border-red-500 bg-white rounded-[30px] p-8 flexBetween flex-col'>
                    <h2 className='regular-h4 leading-tight text-blue-10 mb-36'>
                        Info
                    </h2>
                    <div className='flex item-end flex-col gap-5'>
                        <p className='regular-p text-blue-10'>
                            +49 1234 56789123
                        </p>
                        <p className='regular-p text-blue-10'>
                            info@praxisbeck.com
                        </p>
                        <p className='regular-p text-blue-10'>
                            Baumstraß 1, 76589 Düsburg
                        </p>
                        <p className='regular-p text-blue-10'>
                            08:30 - 17:00
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>

    </section>
  )
}

export default KontaktFormular
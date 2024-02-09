import React from 'react'

const LeistungZwei = () => {
  return (
    <section className='max-container padding-container flex flex-col lg:grid grid-cols-4  gap-3 py-4'>
    
      <div className='rounded-[40px] flex justify-center items-center col-span-2 overflow-hidden bg-leistung-2 bg-cover bg-no-repeat'>
      </div>

      <div className='bg-blue-30 flex-col flex justify-between items-start rounded-[40px] p-8 col-span-2 gap-5 '>
        <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
            Diagnostik <br />und Labor
        </h2>
        <p className='regular-p text-blue-10'>
        Erfahren Sie mehr über unsere hochmodernen diagnostischen Verfahren und Labortests. Wir setzen auf präzise Diagnosen, um Ihnen die bestmögliche Behandlung zu bieten.
        </p>
      </div>
      
    </section>
  )
}

export default LeistungZwei
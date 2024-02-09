import React from 'react'

const LeistungDrei = () => {
  return (
    <section className='max-container padding-container flex flex-col lg:grid grid-cols-4  gap-3 py-4'>
        
      <div className='bg-blue-30 flex-col flex justify-between items-start rounded-[40px] p-8 col-span-2 gap-5 '>
        <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
        Vorsorge- <br /> untersuchung
        </h2>
        <p className='regular-p text-blue-10'>
        Vorsorgeuntersuchungen sind entscheidend, um potenzielle Gesundheitsrisiken frühzeitig zu erkennen. Hier erfahren Sie mehr über die verschiedenen Vorsorgeuntersuchungen, die wir anbieten, und wie sie zu Ihrem Wohlbefinden beitragen können.
        </p>
      </div>

      <div className='rounded-[40px] flex justify-center items-center col-span-2 overflow-hidden bg-leistung-3 bg-cover bg-no-repeat'>
      </div>
    </section>
  )
}

export default LeistungDrei
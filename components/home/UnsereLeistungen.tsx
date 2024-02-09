import React from 'react'
import LeistungenContainer from './LeistungenContainer'

const UnsereLeistungen = () => {
  return (
    <section className='max-container padding-container py-4'>
        <div className="p-8 flex-col flexBetween bg-white rounded-[40px] w-full">
            <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
                Unsere <br/> Leistungen
            </h2>
            <div className='flex flex-col md:flex-row md:flexBetween md:flex-wrap gap-10'>
                <LeistungenContainer
                    props='Allg. medizinische Versorgung'
                    backgroundImage='bg-leistung-1'
                />
                <LeistungenContainer
                    props='Diagnostik und Labor'
                    backgroundImage='bg-leistung-2'
                />
                <LeistungenContainer
                    props='Vorsorge-untersuchungen'
                    backgroundImage='bg-leistung-3'
                />
            
            </div>
        </div>

    </section>
  )
}

export default UnsereLeistungen
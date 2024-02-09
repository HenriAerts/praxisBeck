import React from 'react'
import PersonContainer from './PersonContainer'

const Personal = () => {
  return (
    <section className='max-container padding-container pb-4'>
    <div className="p-8 flex-col flexBetween bg-white rounded-[40px] w-full">
        <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
           Unser<br/>  Personal
        </h2>
        <div className='flex flex-col justify-center md:flex-row lg:flexBetween md:flex-wrap gap-5'>
            <PersonContainer
                backgroundImage="bg-person-1"
                name="Dr. Kubin"
                discription="Facharzt für Radiologie und Sport"
            />
            <PersonContainer
                backgroundImage="bg-person-2"
                name="Dr. med. Mohammed"
                discription="Arzt für allgemein Medizin"
            />
            <PersonContainer
                backgroundImage="bg-person-3"
                name="Fr. Wimmhoff"
                discription="Empfang und Korespondens"
            />
            <PersonContainer
                backgroundImage="bg-person-4"
                name="Fr. Solfas"
                discription="Empfang und Korespondens"
            />
        </div>
    </div>

</section>
  )
}

export default Personal
import React from 'react'
import QAContainer from './QAContainer'

const QA = () => {
  return (
    <section className=' max-container padding-container py-4'>
    <div className="p-8 flex-col flexBetween bg-blue-30 rounded-[40px] w-full ">
        <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
            Oft gestellte<br/>Fragen
        </h2>
        <div className='flex flex-col gap-3 lg:gap-5'>
            <QAContainer 
              header='Was sind die Spezialgebiete der Praxis?'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            />
            <QAContainer
              header='Wie kann ich am schnellsten Kontakt aufnehmen ?'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            />
            <QAContainer
              header='Ich brauch dringend einen Termin. Was nun?'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            />
        </div>
    </div>

</section>
  )
}

export default QA
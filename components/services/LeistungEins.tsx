import BtnLight from '../BtnLight'

const LeistungEins = () => {
  return (
    <section className='max-container padding-container flex flex-col lg:grid grid-cols-4  gap-3 pb-4'>

      <div className='bg-blue-30 flex-col flex justify-between items-start rounded-[40px] p-8 col-span-2 gap-5 '>
          <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
          Allg. <br /> medizinische <br /> Versorgung
          </h2>
          <p className='regular-p text-blue-10'>
            Hier bieten wir eine breite Palette von Dienstleistungen für die allgemeine medizinische Versorgung an. Unsere erfahrenen Ärzte stehen Ihnen zur Verfügung, um akute Krankheiten, Verletzungen oder andere gesundheitliche Anliegen zu behandeln. Erfahren Sie mehr über unsere Expertise und wie wir Ihnen helfen können.
          </p>

      </div>

      <div className='rounded-[40px] flex justify-center items-center col-span-2 overflow-hidden bg-leistung-1 bg-cover bg-no-repeat'>
      </div>
   
    </section>
  )
}

export default LeistungEins
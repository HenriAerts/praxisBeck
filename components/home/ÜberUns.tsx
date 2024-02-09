import BtnLight from '../BtnLight'

const ÜberUns = () => {
  return (
    <section className='max-container padding-container flex flex-col lg:grid grid-cols-4  gap-3 py-4'>

        <div className='rounded-[40px] flex justify-center items-center h-[300px] lg:h-[500px] col-span-2 overflow-hidden'>
            <img src="/Medizinisch/pexels-antoni-shkraba-5215024.jpg" alt="" className='mx-auto'/>
        </div>
        

        <div className='bg-blue-30 flex-col flex justify-between items-start rounded-[40px] p-8 col-span-2 gap-5 '>
            <h2 className='regular-h2 leading-tight text-blue-10 mb-36'>
                Über uns
            </h2>
            <p className='regular-p text-blue-10'>
            Bei Praxis beck setzen wir auf eine patientenzentrierte Versorgung. Wir nehmen uns Zeit für Sie, hören Ihnen aufmerksam zu und entwickeln gemeinsam individuelle Behandlungspläne, um Ihre Gesundheit zu fördern.
            </p>
            <BtnLight
              link= "/about"
              circle= {true}  
              props='Praxis kennen lernen'
            />
        </div>

    </section>
  )
}

export default ÜberUns
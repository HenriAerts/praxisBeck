import React from 'react'

const Philosophie = () => {
  return (
    <section className='max-container padding-container py-4'>
        <div className='bg-white rounded-[40px] flex flex-col px-14 py-40 flexCenter gap-5'>
            <div className='bg-blue-30 rounded-full flex px-3 py-1'>
                <p className='regular-p text-blue-10'>Philosophie</p>
            </div>
            <h3 className='regular-h3 mb-4 text-center text-blue-20'>Bei unserer Praxis setzen wir auf eine <span className='text-blue-10 font-[400]'> patientenzentrierte Versorgung.</span>  Wir nehmen uns Zeit für Sie, hören Ihnen aufmerksam zu und entwickeln gemeinsam <span className='text-blue-10 font-[400]'> individuelle Behandlungspläne,</span>  um Ihre Gesundheit zu fördern.</h3>
            <div className='flex mr-[-30px]'>
                <img className='flexCenter w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-askar-abayev-5638645.jpg" alt="old Lady" />
                <img className='left-[-10px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-jorge-fakhouri-filho-2701660.jpg" alt="old Lady"/>
                <img className='left-[-20px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-italo-melo-2379004.jpg" alt="old Lady" />
                <img className='left-[-30px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-thisisengineering-3861962.jpg" alt="old Lady" />
            </div>  
        </div>
    </section>
  )
}

export default Philosophie
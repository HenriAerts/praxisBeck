import BtnDark from '../BtnDark'
import BtnLight from '../BtnLight'
import BtnMiddle from '../BtnMiddle'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-3 lg:grid lg:grid-cols-4 lg:grid-rows-2 pb-4 '>

        <div className='bg-white rounded-[40px] flex flex-col  lg:col-span-2 lg:row-span-2 px-8 py-12 justify-center gap-5'>
            <h1 className='regular-h1 leading-tight text-blue-10'>Die Gesundheits- versorgung der Zukunft</h1>
            <p className='regular-p text-blue-10 mb-4'>Herzlich willkommen auf der offiziellen Webseite von Praxis Beck, Ihrer vertrauenswürdigen Anlaufstelle für ganzheitliche Gesundheitsversorgung in Mainz. Unser engagiertes Team von Fachärzten steht Ihnen zur Seite, um Ihre Gesundheit optimal zu betreuen.</p>
            <div className='flex flex-row gap-3'>
                <BtnMiddle
                    link='https://www.google.com/search?q=rezension+schreiben&rlz=1C5CHFA_enDE982DE982&oq=rezension+s&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8'
                    circle= {false}
                    props='Mehr Rezesionen'
                />
                <BtnDark
                    link='/kontakt'
                    circle= {true}
                    props='Termin Buchen'
                />           
            </div>
        </div>
        
        <div className='hidden bg-white rounded-[40px] lg:flexCenter  h-96 col-span-2 overflow-hidden'>
            <img src="/Medizinisch/pexels-anna-shvets-4483323.jpg" alt="" />
        </div>

        <div className='bg-white rounded-[30px] bg-hero-image2 bg-cover bg-right-bottom bg-no-repeat flex-col flexBetween p-8 h-72 lg:h-auto'>
            <h2 className='regular-h1 self-end text-white'>+4</h2>
            <BtnLight
                link= "/about"
                circle= {true}
                props='Zu den Ärzten'
            />  
        </div>

        <div className='bg-blue-30 flex-col flexBetween rounded-[30px] p-8 h-72 lg:h-auto'>
            <div className='flex mr-[-30px]'>
                <img className='w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-askar-abayev-5638645.jpg" alt="old Lady" />
                <img className='left-[-10px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-jorge-fakhouri-filho-2701660.jpg" alt="old Lady"/>
                <img className='left-[-20px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-italo-melo-2379004.jpg" alt="old Lady" />
                <img className='left-[-30px] relative w-[60px] h-[60px] rounded-full object-cover' src="/Profile/pexels-thisisengineering-3861962.jpg" alt="old Lady" />
            </div>
            <p className='regular-p text-blue-10'>
                Viele Zufriedene Mainzer vertrauen uns bereits- Lernen Sie uns besser kennen!
            </p>
        </div>

    </section>
  )
}

export default Hero
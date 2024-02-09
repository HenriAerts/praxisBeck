import React from 'react'
import BewertungsContainer from './BewertungsContainer'
import BtnMiddle from '../BtnMiddle'

const Bewertungen = () => {
  return (
    <section className='max-container padding-container md:py-4'>
        <div className="p-8 flex-col lg:flex-row flexBetween bg-white rounded-[40px] gap-8">
            <div className='flex flex-col gap-10'>
                <h2 className='regular-h2 leading-tight text-blue-10 lg:mb-36'>
                Was unsere <br /> Kunden <br /> sagen
                </h2>

                <div className='flex lg:hidden '> 
                    <BewertungsContainer
                            bewertung='Dr. Beck hat immer ein offenes Ohr für meine Anliegen. Die Praxis ist gut organisiert, die Wartezeiten sind kurz, und das Personal ist freundlich. Die Behandlungen sind stets professionell, und ich fühle mich gut betreut.'
                            name='Angela Müller'
                        />
                </div>

                <div>
                    <BtnMiddle
                        link='https://www.google.com/search?q=rezension+schreiben&rlz=1C5CHFA_enDE982DE982&oq=rezension+s&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8'
                        circle= {true}
                        props='Mehr Rezesionen'
                    />
                </div>
            </div>
            <div className='hidden lg:grid grid-cols-2 grid-row-2 gap-10 w-3/5'>
                <BewertungsContainer
                    bewertung='Dr. Beck hat immer ein offenes Ohr für meine Anliegen. Die Praxis ist gut organisiert, die Wartezeiten sind kurz, und das Personal ist freundlich. Die Behandlungen sind stets professionell, und ich fühle mich gut betreut.'
                    name='Angela Müller'
                />
                <BewertungsContainer
                    bewertung='Dr. Beck ist nicht nur ein kompetenter Arzt, sondern auch auf dem neuesten Stand in Bezug auf Sportmedizin. Die Praxis ist modern ausgestattet, und die Beratung ist auf meine sportlichen Bedürfnisse abgestimmt. Ich schätze die ganzheitliche Betrachtung meiner Gesundheit.'
                    name='Micheal Becker'
                />
                <BewertungsContainer
                    bewertung='Die Arztpraxis von Dr. Beck überzeugt durch Effizienz und Kompetenz. Die Terminvereinbarung ist unkompliziert, und ich schätze die kurzen Wartezeiten. Dr. Beck nimmt sich Zeit für eine umfassende Beratung, was mir als vielbeschäftigtem Unternehmer sehr entgegenkommt.'
                    name='Tobi Schmitt'
                />
                <BewertungsContainer
                    bewertung='Dr. Beck ist ein sehr einfühlsamer Arzt, der sich Zeit für seine älteren Patienten nimmt. Die Atmosphäre in der Praxis ist angenehm, und das Personal ist stets hilfsbereit. Ich fühle mich gut aufgehoben und gut betreut."'
                    name='Franceska Wagner'
                />
            </div >

        </div>
    </section>
  )
}

export default Bewertungen
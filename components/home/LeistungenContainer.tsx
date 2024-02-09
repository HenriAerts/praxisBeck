import React from 'react'
import BtnLight from '../BtnLight'

type LeistungenProps = {
    props: string;
    backgroundImage: string;
}

const LeistungenContainer = ({props, backgroundImage}: LeistungenProps) => {
  return (
    <div className={`p-8 flexBetween flex-col bg-blue-30 rounded-[30px] gap-24 ${backgroundImage} bg-cover bg-no-repeat hover:-translate-y-1 duration-300 transition-all cursor-pointer`}>
        <h5 className="regular-h5 w-min text-white">
            {props}
        </h5>
        <BtnLight
            link= "/services"
            circle= {true}
            props='Leistung anschauen'
        />    
    </div>
  )
}

export default LeistungenContainer
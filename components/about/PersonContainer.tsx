type PersonProps = {
    backgroundImage: string;
    name: string;
    discription: string;

}



const PersonContainer = ({backgroundImage, name, discription}: PersonProps) => {
  return (
    <>
        <div className={`p-8 flex justify-end  flex-col bg-blue-30 rounded-[30px] gap-24 ${backgroundImage} bg-cover bg-no-repeat hover:-translate-y-1 duration-300 transition-all cursor-pointer h-[420px] md:h-96`}>
            <div className="bg-white rounded-[25px] p-8 flexCenter flex-col min-w-60 ">
                <h5 className="text-[14px] font-[500] md:text-[16px] leading-normal  text-blue-10 text-nowrap">
                    {name}
                </h5>
                <p className="text-blue-10 regular-p2 text-nowrap">
                    {discription}
                </p>   
            </div>
        </div>

    </>

  )
}

export default PersonContainer
"use client"



const Form = () => {

    async function handleSubmit(event:any) {
        event.preventDefault();

        const data ={
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            massage: String(event.target.massage.value),
        };
        
        const response = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json"
            }, 
            body: JSON.stringify(data)
        });

        if(response.ok){
            console.log("Senden der Nachricht war erfolgreich!")
        }
        if(!response.ok){
            console.log("Nachricht senden fehlgeschlagen!")
        }
    }


  return (
    <div>
        <form className='gap-8 flex flex-col flexCenter' onSubmit={handleSubmit}>
            <div className='w-full flex flex-col'>
                {/* <label htmlFor="name">Name</label> */}
                <input required type="text" id='name' placeholder="Name" autoComplete='off' className=' bg-blue-30 rounded-full px-5 py-3'/>
            </div>
            <div className='w-full flex flex-col'>
                {/* <label htmlFor="email">Email</label> */}
                <input required type="text" id='email' placeholder="Email" autoComplete='off' className=' bg-blue-30 rounded-full px-5 py-3'/>
            </div>
            <div className='w-full flex flex-col'>
                {/* <label htmlFor="massage">Nachricht</label> */}
                <textarea 
                    placeholder="Nachricht"
                    required
                    id='massage'
                    minLength={10}
                    maxLength={1000}
                    rows={5} 
                    className='bg-blue-30 rounded-[30px] px-5 py-3 w-full'
                />
            </div>
            <button className=' bg-blue-10 rounded-full flex hover:-translate-y-1 duration-300 transition-all ' type="submit">
                <p className='text-white px-6 self-center regular-btn'>Nachricht senden</p>
                <div className='bg-white w-[43px] h-[43px] m-1 flexCenter rounded-full'>
                    <svg width="11" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 8 8.5L1 18" stroke="#044F76" stroke-width="2.5"/></svg>
                 </div> 
            </button> 
        </form>

    </div>
  )
}

export default Form
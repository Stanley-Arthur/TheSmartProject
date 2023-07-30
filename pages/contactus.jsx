import React, {useState} from 'react'

const contactus = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit= async (event)=>{
        event.preventDefault()
        try{
            const res = await fetch ("/api/contactus", {
                method: "POST",
                body: JSON.stringify({
                    name, 
                    email,
                    message
                }),
                headers:{
                    "content-type": "application/json"
                },
            })
        }catch (err){
            console.error( err)

        }
    }
  return (
    <div className=" h-screen pt-32 flex item-center justify-center">
        <form onSubmit={onSubmit} className=" flex flex-col gap-y-10">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className="py-2 px-5 border" />
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="py-2 px-5 border" />
            <textarea value={message}  onChange={(e)=>setMessage(e.target.value)} className="py-2 px-5 border"  placeholder="message"></textarea>
            <button type="submit"> submit</button>
        </form>
    </div>
  )
}

export default contactus
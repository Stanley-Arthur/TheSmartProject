import React ,{useState} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMobile,AiOutlineClockCircle} from 'react-icons/ai'
import Link from 'next/link'
import {ImOffice} from "react-icons/im"


const Narvbar = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    const menus=[
        {title:"Home", path:"/"},
        {title:"Services",submenu:true,
        subItems:[
         {Head: "Infrastructure Services", subItems:[
           {title:"Network",  path:"/network"},
           {title:"WiFi Services",  path:"/wifi"},
           {title:"Helpdesk", path:"/helpdesk" },
           {title:"Operating System",  path:"/os"},
         ]},
         {Head: "Cyber Security Services", subItems:[
           {title:"Cloud Migration(Azure)", path:"/" },
           {title:"End Point Security", path:"/" },
           {title:"Web Security",  path:"/"},
           {title:"Email Security", path:"/" },
           {title:"Application Security", path:"/" },
         ]},
         {Head: "Cloud Services", subItems:[
           {title:"Office 365",  path:"/" },
           {title:"Hybrid Cloud",  path:"/" },
           {title:"Private Cloud Solution",  path:"/" },
         ]},
         {Head: "Development", subItems:[
           {title:"Systems Automation",  path:"/" },
           {title:"API Integration",  path:"/"},
           {title:"Software Development",  path:"/"},
         ]},
       ]
     },
        {title:"Smart Discover",  path:"/discover" },
        {title:"Tech Support",  path:"#techsupport" },
        {title:"Our Offices",submenu:true,
        subItems:[
          {Head: "Corp Office", subItems:[
            {title:"13428 Timber Crest Dr", },
          ]},
          {Head: "Atlanta Office", subItems:[
            {title:"Hampton Ga 30228", },
          ]},
          {Head: "Ghana Office", subItems:[
            {title:"St John, Achimota Accra", },
          ]},
        ]
      },
      {title:"Contact",  path:"/contact"},

    ]
 

  return (
    <div className='fixed w-full font-normal h-20 mt-20 shadow-xl z-[100] bg-white'>
        <div className='flex xl:justify-around justify-between  items-center w-full h-full  px-2 2xl:px-16'>
          
            <div className='flex '>

                <div className='text-black flex gap-2  justify-center items-center'>
                    {menus.map((menu)=>(
                        <div>
                            <div className="px-3 text-left md:cursor-pointer group">
                                <div className=' inline-flex  items-center'>
                                    {menu.icon}
                                    <a href={menu.path} className='py-7 flex  pl-2 justify-between  text-xl  hover:text-blue-500 text-black items-center md:pr-0 pr-5 group'>{menu.title} </a>
                                </div>
                               
                                {
                                    menu.submenu && (
                                        <div>
                                            <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                                                <div className='py-3'>
                                                    <div className=' w-4 h-4 left-3 absolute mt-1  rotate-45'></div>
                                                </div>
                                                <div className="bg-white p-5 grid grid-cols-4 gap-10">
                                                    {
                                                        menu.subItems.map(( mysubItems)=>(
                                                            <div className='text-white'>
                                                                <h1 className="text-xl border-b pb-4 text-black font-semibold">
                                                                    {mysubItems.Head}
                                                                </h1>
                                                                {mysubItems.subItems.map((sitems)=>(
                                                                    <div className=" mt-3 pb-2">
                                                                        <a href={sitems.path}  className=" hover:text-blue-600 text-lg my-5 text-black">
                                                                         {sitems.title}
                                                                        </a>
                                                        

                                                                    </div>
                                                                 
                                                                ))}
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                 {/*    <div>
                    <AiOutlineClockCircle size={25}/>
                    </div>
                
                    <div className='flex-col '>
                        <p>8:00am - 5:00pm</p>
                        <p className='text-black/30'>Monday - Friday</p>
                    </div> */}
                </div>
                {/* <div className='text-black flex  gap-2 ml-10 mr-14 justify-center items-center'>
                    <div>
                    <AiOutlineMail size={25}/>
                    </div>  
                    <div className='flex-col hover:cursor-pointer text-blue-400 text-lg'>
                        <a>
                          <Link target="_blank" href="https://twitter.com/" >twitter</Link>
                        </a>
                        
                        <p className=' '>Email: info@smartitbs.com </p>
                        <a href='https://smartitbs.com/'>Website: www.smartitbs.com </a>
                    </div>
                </div> */}
                {/* <div className='text-black  hover:cursor-pointer flex gap-2 ml-8 justify-center items-center'>
                    <div>
                    <AiOutlineMobile size={25}/>
                    </div>
                    <div className='flex-col text-blue-400 text-lg'>
                        <p>Office: 770-686-7390</p>
                        <p className='text-black'>Fax: 770-686-7391</p>
                    </div>
                </div> */}
            </div>

        </div>
    </div>
  )
}

export default Narvbar
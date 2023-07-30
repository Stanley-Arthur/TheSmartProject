import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMobile} from 'react-icons/ai'
import {ImOffice} from "react-icons/im"




const Banner = () => {

    const menus=[
        {title:"Our Offices",icon:<ImOffice size={25}/>,submenu:true,
        subItems:[
          {Head: "Corporate Office", subItems:[
            {title:"13428 Timber Crest Dr", },
            {title:"1200p Guelph Cir", },
            {title:"Maple Grove MN 55311", },
           
          ]},
          {Head: "Atlanta Office", subItems:[
            {title:"Hampton Ga 30228", },
         
          ]},
          {Head: "Ghana Office", subItems:[
            {title:"St John, Achimota Accra", },
         
          ]},
        ]
      },

    ]
 

  return (
    <div className=''>
        <div className='flex justify-between   item-center flex-grow   gap-6 bg-white max-w-7xl px-20 mx-auto h-32'>
          
            <div className='flex '>

                <div className='text-black flex gap-2  justify-center items-center'>
                    {menus.map((menu, index)=>(
                        <div>
                            <div className="px-3 text-left md:cursor-pointer group">
                                <div key={menu.id || index} className=' inline-flex  items-center'>
                                    {menu.icon}
                                    <h1 className='py-7 flex  pl-2 justify-between  text-xl  font-semibold text-blue-500 items-center md:pr-0 pr-5 group'>
                                        {menu.title}
                                    </h1>

                                </div>
                               
                                {
                                    menu.submenu && (
                                        <div>
                                            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                                <div className='py-3'>
                                                    <div className=' w-4 h-4 left-3 absolute mt-1 bg-blue-400  rotate-45'></div>
                                                </div>
                                                <div className="bg-blue-400 p-5 grid grid-cols-3 gap-10">
                                                    {
                                                        menu.subItems.map(( mysubItems, index)=>(
                                                            <div key={mysubItems.id || index}  className='text-white'>
                                                                <h1 className="text-xl  hover:text-blue-900 font-semibold">
                                                                    {mysubItems.Head}
                                                                </h1>
                                                                {mysubItems.subItems.map((sitems, index)=>(
                                                                     <div key={sitems.id || index}>
                                                                        <li  className=" text-lg font-bold hover:text-white text-blue-900 my-2.5"> {sitems.title} </li> 
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
                <div className='text-black flex  gap-2 ml-10 mr-14 justify-center items-center'>
                    <div>
                    <AiOutlineMail size={25}/>
                    </div>  
                    <div className='flex-col hover:cursor-pointer text-blue-400 text-lg'>
                        {/* <a>
                          <Link target="_blank" href="https://twitter.com/" >twitter</Link>
                        </a> */}
                        
                        <p className=' '>Email: info@smartitbs.com </p>
                        {/* <a href='https://smartitbs.com/'>Website: www.smartitbs.com </a> */}
                    </div>
                </div>
                <div className='text-black  hover:cursor-pointer flex gap-2 ml-8 justify-center items-center'>
                    <div>
                    <AiOutlineMobile size={25}/>
                    </div>
                    <div className='flex-col text-blue-400 text-lg'>
                        <p>Office: 770-686-7390</p>
                        <p className='text-black'>Fax: 770-686-7391</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner

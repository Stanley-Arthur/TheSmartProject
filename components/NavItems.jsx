import React,{useState} from 'react'
import Link from 'next/link'
import {RiArrowDropDownFill} from 'react-icons/ri'



const NavItems = () => {

  const [submenuOpen,setsubmenuOpen]=useState(false)


  const menus=[
    {title:"Home ",path:"/"},
    {title:"Tech Support",path:"#techsupport"},
    {title:"Services",icon:<RiArrowDropDownFill size={30} />,submenu:true,subItems:[
      {title:"Managed Services",path:"/managedservices" },
      {title:"Cyber Security",path:"/cybersecurity" },
      {title:"Cloud Services",path:"/cloudservices" },
      {title:"Our Approach",path:"/approach" },
    ]
  },
  // {title:"Products",path:"/products"},
  {title:"Contact",path:"/contact"},
   
  ]
  return (
    <div className=' md:flex '>
      {
        menus.map((menu,index)=>(
          <div  key={menu.id || index} className='py-2 flex flex-col'>
            <ul className='inline-flex items-center'>
            <a 
              href={menu.path}
             >
                
                <li className=' ml-10 md:pb-5 hover:cursor-pointer  hover:text-blue-400 font-semibold text-sm md:text-xl uppercase text-black  '>
                {menu.title}

                </li>     
            </a>
             <span className={` inline-flex text-mx cursor-pointer text-black ${submenuOpen && "rotate-180"}`}  onClick={()=>setsubmenuOpen(!submenuOpen)}>{menu.icon}</span> 
            </ul>
             {
              menu.submenu && submenuOpen && (
                <div className='text-sm md:mt-12 ml-6  lg:bg-white text-black border-top-2   min-w-52  px-10 h-44 pl-5 cursor-pointer lg:absolute  md:top-8 top-14 z-20'>
                  {menu.subItems.map((subItem, index)=>(
                    <div  key={subItem.id || index} className='pt-3  '>
                      <Link  href={subItem.path} className='md:text-xl font-semibold py-3 px-4 rounded uppercase hover:text-blue-500 ' >{subItem.title}</Link>
                    </div>
                  ))}
                </div>

              )
            }
          </div>
        )
       )
       
      }
    </div>
  )
}
export default NavItems


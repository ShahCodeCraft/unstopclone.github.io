import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { IconContext } from 'react-icons';
import { PiHandHeartDuotone } from "react-icons/pi";
import { SiMinds } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { GiTrophy } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import { PiGooglePodcastsLogo } from "react-icons/pi";
import { ImPriceTag } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillStar} from "react-icons/ai";
import { FcHome} from "react-icons/fc";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiChats } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { MdPrivacyTip } from "react-icons/md";






function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

   const SidebarData = [
    {
      title: "For Employers",
      path: "https://unstop.com/employers",
       icon: <PiHandHeartDuotone size={20} />,
      cName: "nav-text",
    },
    {
      title: "Our Solutions",
      path: "/",
      icon: <SiMinds size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Our Products",
      path: "/products",
      icon: <CgMenuGridO size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Campus Hiring Meet 2023",
      path: "https://unstop.com/awards/campus-hiring-meet-2023",
      icon: <GiTrophy size={20} />,
      cName: "nav-text",
    },
    {
      title: "Clientele",
      path: "https://unstop.com/about/clients",
      icon: <BsPersonWorkspace size={20} />,
      cName: "nav-text",
    },
    {
        title: "Client Case Studies",
        path: "https://unstop.com/about/case-studies",
        icon: <MdScreenSearchDesktop size={20}/>,
        cName: "nav-text",
      },
    {
      title: "Unstop Brand Ambassador Program",
      path: "https://unstop.com/campus-ambassador-program",
      icon: <PiGooglePodcastsLogo size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Pricing",
      path: "https://unstop.com/pricing",
      icon: <ImPriceTag size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Contact Up",
      path: "https://unstop.com/about/contact-us",
      icon: <IoMdCall size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Unstop Awards 2023",
      path: "https://unstop.com/awards/2023",
      icon: <GiTrophy size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Online Quizzing Festival",
      path: "https://unstop.com/online-quizzing-festival",
      icon: <TbDeviceDesktopQuestion size={20} />,
      cName: "nav-text",
    },
    {
      title: "Online Hackathon Festival",
      path: "https://unstop.com/online-hackathon-festival",
      icon: <TbDeviceDesktopCode size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Parner With Us",
      path: "https://unstop.com/our-partners/become-a-partner",
      icon: <FaRegHandshake size={20}/>,
      cName: "nav-text",
    },
    {
      title: "Partners",
      path: "https://unstop.com/our-partners",
      icon: <MdPeopleAlt size={20} />,
      cName: "nav-text",
    },
    {
      title: "Testimonials",
      path: "https://unstop.com/about/testimonials",
      icon: <AiFillStar size={20} />,
      cName: "nav-text",
    },
    {
      title: "About Us",
      path: "https://unstop.com/about",
      icon: <FcHome size={20} />,
      cName: "nav-text",
    },
    {
      title: "Careers",
      path: "https://unstop.com/about/unstop-careers",
      icon: <BsGraphUpArrow size={20} />,
      cName: "nav-text",
    },
    {
      title: "FAQs",
      path: "https://unstop.com/faq/organizers",
      icon: <PiChats size={20} />,
      cName: "nav-text",
    },
    {
      title: "Terms & Conditions",
      path: "https://unstop.com/legal/terms-of-use",
      icon: <  GrDocumentText size={20} />,
      cName: "nav-text",
    },
    {
      title: "Privacy Policy",
      path: "https://unstop.com/legal/privacy-policy",
      icon: < MdPrivacyTip size={20} />,
      cName: "nav-text",
    },
   
  
  
  ];

  return (
    <div className='h-full'>
      <IconContext.Provider value={{ color: '#1c4980' }}>
        <div className='navbar1'>
          <Link to='#' className='menu-bars1'>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            <img src='https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg' alt='' onClick={showSidebar}  />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu1 active' : 'nav-menu1'}>
          <ul className='nav-menu-items1' onClick={showSidebar}>
            <li className='navbar-toggle1'>
              <Link to='#' className='menu-bars1 w-full px-5'>
                <h2 className='text-lg font-semibold'>Menu</h2>
                <span><AiIcons.AiOutlineClose size={20} /></span>
              </Link>
            </li>
            <li className='m-5 flex justify-center '>
            <button className="w-full justify-center flex text-white hover:bg-[#1c4965] hover:text-white p-3 shadow-none capitalize text-center font-semibold text-sm rounded-lg bg-[#1c4980]">
              <Link to='' className=''>
             
              <p className="text-[14px] text-white">Host Events</p>
           
              </Link>
              </button>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
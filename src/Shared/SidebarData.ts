import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { PiHandHeartDuotone } from "react-icons/pi";
import { SiMinds } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { GiTrophy } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import { PiGooglePodcastsLogo } from "react-icons/pi";
import { ImPriceTag } from "react-icons/im";
import { IoMdCall } from "react-icons/io";

export const SidebarData = [
  {
    title: "For Employers",
    path: "https://unstop.com/employers",
     icon: <PiHandHeartDuotone />,
    cName: "nav-text",
  },
  {
    title: "Our Solutions",
    path: "/",
    icon: <SiMinds />,
    cName: "nav-text",
  },
  {
    title: "Our Products",
    path: "/products",
    icon: <CgMenuGridO />,
    cName: "nav-text",
  },
  {
    title: "Campus Hiring Meet 2023",
    path: "https://unstop.com/awards/campus-hiring-meet-2023",
    icon: <GiTrophy />,
    cName: "nav-text",
  },
  {
    title: "Clientele",
    path: "https://unstop.com/about/clients",
    icon: <BsPersonWorkspace />,
    cName: "nav-text",
  },
  {
      title: "Client Case Studies",
      path: "https://unstop.com/about/case-studies",
      icon: <MdScreenSearchDesktop />,
      cName: "nav-text",
    },
  {
    title: "Unstop Brand Ambassador Program",
    path: "https://unstop.com/campus-ambassador-program",
    icon: <PiGooglePodcastsLogo />,
    cName: "nav-text",
  },
  {
    title: "Pricing",
    path: "https://unstop.com/pricing",
    icon: <ImPriceTag />,
    cName: "nav-text",
  },
  {
    title: "Contact Up",
    path: "https://unstop.com/about/contact-us",
    icon: <IoMdCall />,
    cName: "nav-text",
  },
  {
    title: "Unstop Awards 2023",
    path: "https://unstop.com/awards/2023",
    icon: <GiTrophy />,
    cName: "nav-text",
  },

];
];

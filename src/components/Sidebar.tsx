import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import aspireLogo from "../assets/aspireLogo.svg";
import HomeIcon from "../assets/HomeIcon";
import PaymentsIcon from "../assets/PaymentsIcon";
import CardIcon from "../assets/CardIcon";
import CreditIcon from "../assets/CreditIcon";
import SettingsIcon from "../assets/SettingsIcon";

export const sideBarArray = [
  {
    title: "Home",
    icon: <HomeIcon color="#01D167" />,
    link: "/home",
  },
  {
    title: "Cards",
    icon: <CardIcon color="#ffffff" />,
    link: "/cards",
  },
  {
    title: "Payments",
    icon: <PaymentsIcon color="#ffffff" />,
    link: "/payments",
  },
  {
    title: "Credit",
    icon: <CreditIcon color="#ffffff" />,
    link: "/credit",
  },
  {
    title: "Settings",
    icon: <SettingsIcon color="#ffffff" />,
    link: "/settings",
  },
];

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full min-h-screen w-!80 bg-dark-blue text-white">
      <img src={aspireLogo} className="logo ml-12 pt-12" />
      <div className="ml-12 font-sans text-white opacity-30 text-[15px] pt-5">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
      <div className="pt-20">
        <List component="nav" className="flex flex-col gap-[60px]">
          {sideBarArray.map((sidebarContent, index) => (
            <NavLink
              to={sidebarContent.link}
              key={sidebarContent.title}
              className={({ isActive }) => (isActive ? "bg-[#009DFF1A]" : "")}
              onClick={() => setActiveIndex(index)}
            >
              <ListItem
                className={`text-base flex align-baseline hover:bg-[#009DFF1A] hover:cursor-pointer `}
              >
                <ListItemIcon className="pl-9">
                  {React.cloneElement(sidebarContent.icon, {
                    color: activeIndex === index ? "#01D167" : "#ffffff",
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={sidebarContent.title}
                  className={` pl-4 ${
                    activeIndex === index
                      ? "text-active !font-bold"
                      : "text-white"
                  }`}
                />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;

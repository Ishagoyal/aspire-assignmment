import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import aspireLogo from "../assets/aspireLogo.svg";
import HomeIcon from "../assets/HomeIcon";
import PaymentsIcon from "../assets/PaymentsIcon";
import CardIcon from "../assets/CardIcon";
import CreditIcon from "../assets/CreditIcon";
import SettingsIcon from "../assets/SettingsIcon";

export const sideBarArray = [
  {
    id: "home",
    title: "Home",
    icon: <HomeIcon color="#ffffff" />,
    link: "/home",
  },
  {
    id: "cards",
    title: "Cards",
    icon: <CardIcon color="#ffffff" />,
    link: "/cards",
  },
  {
    id: "payments",
    title: "Payments",
    icon: <PaymentsIcon color="#ffffff" />,
    link: "/payments",
  },
  {
    id: "credit",
    title: "Credit",
    icon: <CreditIcon color="#ffffff" />,
    link: "/credit",
  },
  {
    id: "settings",
    title: "Settings",
    icon: <SettingsIcon color="#ffffff" />,
    link: "/settings",
  },
];

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${location.pathname}`);
    const pathnameWithoutSlash = location.pathname.replace(/^\//, "");
    if (pathnameWithoutSlash) {
      setActiveTab(pathnameWithoutSlash);
    }
  }, []);

  return (
    <div className=" w-[23%] bg-dark-blue text-white">
      <img src={aspireLogo} className="logo ml-12 pt-12" />
      <div className="ml-12 font-sans text-white opacity-30 text-[15px] pt-5">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
      <div className="pt-20">
        <List component="nav" className="flex flex-col gap-[60px]">
          {sideBarArray.map((sidebarContent) => (
            <NavLink
              to={sidebarContent.link}
              key={sidebarContent.title}
              className={({ isActive }) => (isActive ? "bg-[#009DFF1A]" : "")}
              onClick={() => setActiveTab(sidebarContent.id)}
            >
              <ListItem
                className={`text-base flex align-baseline hover:bg-[#009DFF1A] hover:cursor-pointer `}
              >
                <ListItemIcon className="pl-9">
                  {React.cloneElement(sidebarContent.icon, {
                    color:
                      activeTab === sidebarContent.id ? "#01D167" : "#ffffff",
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={sidebarContent.title}
                  className={` pl-4 ${
                    activeTab === sidebarContent.id
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

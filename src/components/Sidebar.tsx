import React, { useEffect, useMemo, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import aspireLogo from "../assets/aspireLogo.svg";
import HomeIcon from "../assets/HomeIcon";
import PaymentsIcon from "../assets/PaymentsIcon";
import CardIcon from "../assets/CardIcon";
import CreditIcon from "../assets/CreditIcon";
import SettingsIcon from "../assets/SettingsIcon";
import useDevice from "../hooks/useDevice";

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
  const currentDeviceType = useDevice();

  const mediaClassesListItemText = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "hidden";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  const mediaClassesDescription = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "hidden";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  const mediaClassesListItem = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "!pl-6";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  useEffect(() => {
    navigate(`${location.pathname}`);
    const pathnameWithoutSlash = location.pathname.replace(/^\//, "");
    if (pathnameWithoutSlash) {
      setActiveTab(pathnameWithoutSlash);
    }
  }, []);

  const LogoSection = () => {
    return (
      <div className="flex flex-col gap-5 px-12">
        <div className="w-1/2">
          <img src={aspireLogo} className="logo" />
        </div>
        <div
          className={`font-sans text-white opacity-30 text-[15px] ${mediaClassesDescription}  `}
        >
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-dark-blue text-white h-full sticky py-12 flex flex-col gap-20">
      <LogoSection />
      <List component="nav" className="flex flex-col gap-11 !py-0">
        {sideBarArray.map((sidebarContent) => (
          <NavLink
            to={sidebarContent.link}
            key={sidebarContent.title}
            className={({ isActive }) => (isActive ? "bg-[#009DFF1A]" : "")}
            onClick={() => setActiveTab(sidebarContent.id)}
          >
            <ListItem
              className={`text-base flex align-baseline hover:bg-[#009DFF1A] hover:cursor-pointer !pl-12 ${mediaClassesListItem}`}
            >
              <ListItemIcon className="">
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
                } ${mediaClassesListItemText}`}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

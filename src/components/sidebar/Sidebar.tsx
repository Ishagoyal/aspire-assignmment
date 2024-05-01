import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import aspireLogo from "../../assets/aspireLogo.svg";
import settingsLogo from "../../assets/account.svg";
import cardLogo from "../../assets/card.svg";
import creditLogo from "../../assets/credit.svg";
import paymentsLogo from "../../assets/payments.svg";
import homeLogo from "../../assets/home.svg";

const sideBarArray = [
  {
    title: "Home",
    icon: homeLogo,
  },
  {
    title: "Cards",
    icon: cardLogo,
  },
  {
    title: "Payments",
    icon: paymentsLogo,
  },
  {
    title: "Credit",
    icon: creditLogo,
  },
  {
    title: "Settings",
    icon: settingsLogo,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="h-full min-h-screen w-80 bg-dark-blue text-white">
      <img src={aspireLogo} className="logo ml-12 pt-12" />
      <div className="ml-12 font-sans text-white opacity-30 text-[15px] pt-5">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
      <div className="pt-20">
        <List component="nav" className="flex flex-col gap-[60px]">
          {" "}
          {sideBarArray.map((sidebarContent) => (
            <ListItem
              className="pl-8 text-base flex align-baseline hover:bg-[#2d83cc] hover:cursor-pointer"
              key={sidebarContent.title}
            >
              <ListItemIcon>
                <img src={sidebarContent.icon} className="logo ml-12" />
              </ListItemIcon>
              <ListItemText primary={sidebarContent.title} className="pl-4" />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;

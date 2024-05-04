import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

import filledPlus from "../../assets/filledPlus.svg";

import AddCardModal from "../../components/AddCardModal";
import CardActions from "../../components/CardActions";

const renderHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[13px]">Available Balance</span>
          <div className="items-center flex flex-row gap-3">
            {/* items-center class is to keep items of row in center of row */}
            <span className="text-[13px] bg-active  px-3 py-[4px] text-white rounded-md ">
              S$
            </span>
            <span className="text-[26px] font-bold font-sans">3000</span>
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex flex-row items-center gap-2 bg-[#325BAF] h-fit py-2 px-3 self-end text-white font-bold"
        >
          <img src={filledPlus}></img>
          <div>New Card</div>
        </button>
      </div>
      <AddCardModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

function Cards() {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const activeTabStyle = {
    "&.Mui-selected": {
      borderBottom: "2px solid #23CEFD !important",
      color: "black",
      fontSize: "14px",
      textTransform: "capitalize",
    },
  };

  const inactiveTabStyle = {
    borderBottom: "none", // Example border style for inactive tabs
    opacity: 0.3,
    fontSize: "14px",
    textTransform: "capitalize",
  };

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <div className="p-[60px]">
      <div>{renderHeader()}</div>
      <div className="pt-[34px]">
        <div className="pt-[34px]">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor={"#23CEFD"}
          >
            <Tab
              label="My debit cards"
              className="!pl-0 focus:outline-none "
              sx={value === 0 ? activeTabStyle : inactiveTabStyle}
            />
            <Tab
              label="All company cards"
              className="!pl-0 focus:outline-none"
              sx={value === 1 ? activeTabStyle : inactiveTabStyle}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <CardActions />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}

export default Cards;

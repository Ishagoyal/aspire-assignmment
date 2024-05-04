import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

import filledPlus from "../../assets/filledPlus.svg";
import eye from "../../assets/eye.svg";
import freezeCard from "../../assets/freezeCard.svg";
import spendLimit from "../../assets/spendLimit.svg";
import gPay from "../../assets/gPay.svg";
import replaceCard from "../../assets/replaceCard.svg";
import deactivateCard from "../../assets/deactivateCard.svg";
import AddCardModal from "../../components/AddCardModal";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import RecentTransactions from "../../components/RecentTransactions";

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


const renderTab1Content = () => {
  return (
    <div className=" w-[906px] shadow-custom-gray rounded-lg overflow-hidden mt-4 p-[40px] pt-[31px]">
      <div className="flex flex-row justify-center">
        <img src={eye}></img>
        <div className="text-active font-bold text-[12px] ml-2">
          Show card number
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col pt-3">
          <CarouselCards />
          <div className="bg-[#EDF3FF] rounded-xl px-8 py-5 mt-8 w-[414px] flex flex-row gap-8">
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={freezeCard} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center">
                Freeze card
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={spendLimit} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center w-[63px]">
                Set spend limit
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={gPay} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center">
                Add to GPay
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={replaceCard} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center">
                Replace card
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img
                src={deactivateCard}
                className="h-8 w-8 flex self-center"
              ></img>
              <div className="text-[13px] pt-2 flex text-center">
                Cancel card
              </div>
            </div>
          </div>
        </div>
        <RecentTransactions />
      </div>
    </div>
  );
};

const renderTabs = () => {
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
    <div className="pt-[34px]">
      <Tabs value={value} onChange={handleChange} indicatorColor={"#23CEFD"}>
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
        {renderTab1Content()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </div>
  );
};

function Cards() {
  return (
    <div className="p-[60px]">
      <div>{renderHeader()}</div>
      <div className="pt-[34px]">{renderTabs()}</div>
    </div>
  );
}

export default Cards;

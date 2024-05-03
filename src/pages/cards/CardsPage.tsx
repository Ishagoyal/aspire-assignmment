import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tab,
  Tabs,
} from "@mui/material";
import { useState } from "react";

import filledPlus from "../../assets/filledPlus.svg";
import eye from "../../assets/eye.svg";
import aspireLogoWhite from "../../assets/aspireLogoWhite.svg";
import visaLogo from "../../assets/visaLogo.svg";
import freezeCard from "../../assets/freezeCard.svg";
import spendLimit from "../../assets/spendLimit.svg";
import gPay from "../../assets/gPay.svg";
import replaceCard from "../../assets/replaceCard.svg";
import deactivateCard from "../../assets/deactivateCard.svg";
import cardDetails from "../../assets/cardDetails.svg";
import recentTransactions from "../../assets/recentTransactions.svg";
import fileStorage from "../../assets/fileStorage.svg";
import next from "../../assets/next.svg";
import card from "../../assets/card.svg";
import flights from "../../assets/flights.svg";
import megaphone from "../../assets/megaphone.svg";
import DownArrowIcon from "../../assets/DownArrow";
import AddCardModal from "../../components/AddCardModal";

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
  const accordionStyle = {
    backgroundColor: "#F5F9FF",
    "&.MuiAccordion-root::before": {
      background: "none",
    },
    "&.MuiAccordion-root": {
      boxShadow: "none",
    },
  };
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
          <div className="flex flex-col ">
            <div className="bg-active w-[414px] h-[248.85] rounded-xl p-[27px]">
              <div className="flex justify-end">
                <img src={aspireLogoWhite}></img>
              </div>
              <div className="text-white text-[24px] font-sans font-bold pt-[28px]">
                Mark Henry
              </div>
              <div className="flex space-x-2 items-center pt-[27px]">
                <div className="flex pr-[27px] space-x-2">
                  {" "}
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex pr-[27px] space-x-2">
                  {" "}
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex pr-[27px] space-x-2">
                  {" "}
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-white font-bold">2020</div>
              </div>
              <div className="flex flex-row pt-[18px] items-center ">
                <div className="text-[13px] text-white">Thru: 12/20</div>
                <div className="flex justify-center items-center ml-10">
                  <div className="text-[13px] text-white font-sans">{`CVV: `}</div>
                  <div className="text-[24px] text-white ml-2">***</div>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={visaLogo}></img>
              </div>
            </div>
            <div className="flex justify-center pt-4 space-x-2">
              <div className="w-3 h-2 bg-active rounded-xl"></div>
              <div className="w-2 h-2 bg-active rounded-full opacity-20"></div>
              <div className="w-2 h-2 bg-active rounded-full opacity-20"></div>
            </div>
          </div>
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
        <div className="flex flex-col gap-6 pt-3 ml-[46px]">
          <Accordion
            className="bg-[#F5F9FF] !shadow-custom-gray !rounded-lg"
            sx={accordionStyle}
          >
            <AccordionSummary
              expandIcon={<DownArrowIcon />}
              id="panel1-header"
              className="border-b-[1px] rounded-b-lg"
            >
              <div className="flex content-center p-4">
                <img src={cardDetails}></img>
                <div className="text-sm ml-3">Card details</div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="!p-0">
              <div className="px-8 py-3 border-t-[1px] border-[#F5F5F5] bg-white rounded-b-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="bg-[#F5F9FF] !shadow-custom-gray !rounded-lg"
            sx={accordionStyle}
          >
            <AccordionSummary
              expandIcon={<DownArrowIcon />}
              id="panel1-header"
              className="border-b-[1px] rounded-b-lg"
            >
              <div className="flex content-center p-4">
                <img src={recentTransactions}></img>
                <div className="text-sm ml-3">Recent transactions</div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="!p-0">
              <div className="flex flex-col">
                <div className="flex flex-col gap-4 px-6 bg-white">
                  <div className="flex border-b-[2px] border-[#F5F5F5] pt-4 ">
                    <div className="w-12 h-12 rounded-full bg-[#009DFF1A] flex flex-row items-center justify-center">
                      <img src={fileStorage}></img>
                    </div>
                    <div className="flex flex-col gap-1 ml-3">
                      <div className="text-sm">Hamleys</div>
                      <div className="text-[#AAAAAA] text-[13px]">
                        20 May 2020
                      </div>
                      <div className="flex items-center justify-center mt-3 pb-4">
                        <div className="w-6 h-5 rounded-full bg-[#325BAF] flex flex-row items-center justify-center">
                          <img src={card}></img>
                        </div>
                        <div className="text-[#325BAF] text-[12px] font-semibold ml-2">
                          Refund on debit card
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-auto items-baseline">
                      <div className="text-sm text-active font-bold">
                        + S$ 150
                      </div>
                      <img src={next} className="ml-[10px]"></img>
                    </div>
                  </div>
                  <div className="flex border-b-[2px] border-[#F5F5F5] ">
                    <div className="w-12 h-12 rounded-full bg-[#009DFF1A] flex flex-row items-center justify-center">
                      <img src={flights}></img>
                    </div>
                    <div className="flex flex-col gap-1 ml-3">
                      <div className="text-sm">Hamleys</div>
                      <div className="text-[#AAAAAA] text-[13px]">
                        20 May 2020
                      </div>
                      <div className="flex items-center justify-center mt-3 pb-4">
                        <div className="w-6 h-5 rounded-full bg-[#325BAF] flex flex-row items-center justify-center">
                          <img src={card}></img>
                        </div>
                        <div className="text-[#325BAF] text-[12px] font-semibold ml-2">
                          Charged to debit card
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-auto items-baseline">
                      <div className="text-sm text-black font-bold">
                        - S$ 150
                      </div>
                      <img src={next} className="ml-[10px]"></img>
                    </div>
                  </div>
                  <div className="flex border-b-[2px] border-[#F5F5F5] ">
                    <div className="w-12 h-12 rounded-full bg-[#009DFF1A] flex flex-row items-center justify-center">
                      <img src={megaphone}></img>
                    </div>
                    <div className="flex flex-col gap-1 ml-3">
                      <div className="text-sm">Hamleys</div>
                      <div className="text-[#AAAAAA] text-[13px]">
                        20 May 2020
                      </div>
                      <div className="flex items-center justify-center mt-3 pb-4">
                        <div className="w-6 h-5 rounded-full bg-[#325BAF] flex flex-row items-center justify-center">
                          <img src={card}></img>
                        </div>
                        <div className="text-[#325BAF] text-[12px] font-semibold ml-2">
                          Charged to debit card
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-auto items-baseline">
                      <div className="text-sm text-black font-bold">
                        - S$ 150
                      </div>
                      <img src={next} className="ml-[10px]"></img>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[#009DFF1A] flex flex-row items-center justify-center">
                      <img src={fileStorage}></img>
                    </div>
                    <div className="flex flex-col gap-1 ml-3">
                      <div className="text-sm">Hamleys</div>
                      <div className="text-[#AAAAAA] text-[13px]">
                        20 May 2020
                      </div>
                      <div className="flex items-center justify-center mt-3 pb-4">
                        <div className="w-6 h-5 rounded-full bg-[#325BAF] flex flex-row items-center justify-center">
                          <img src={card}></img>
                        </div>
                        <div className="text-[#325BAF] text-[12px] font-semibold ml-2">
                          Charged to debit card
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-auto items-baseline">
                      <div className="text-sm text-black font-bold">
                        - S$ 150
                      </div>
                      <img src={next} className="ml-[10px]"></img>
                    </div>
                  </div>
                </div>
                <div className="bg-[#EDFFF5] text-active text-[13px] font-semibold flex justify-center rounded-b-lg !border-[1px] !border-b-[#DDFFEC] py-4 text-center">
                  View all card transactions
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
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
    <div className="w-full p-[60px]">
      <div>{renderHeader()}</div>
      <div className="pt-[34px]">{renderTabs()}</div>
    </div>
  );
}

export default Cards;

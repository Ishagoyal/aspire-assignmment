import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import cardDetails from "../assets/cardDetails.svg";
import recentTransactions from "../assets/recentTransactions.svg";
import fileStorage from "../assets/fileStorage.svg";
import next from "../assets/next.svg";
import card from "../assets/card.svg";
import flights from "../assets/flights.svg";
import megaphone from "../assets/megaphone.svg";
import DownArrowIcon from "../assets/DownArrow";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CardState } from "../types/cardTypes";

const RecentTransactions: React.FC = () => {
  const selectedSlide = useSelector(
    (state: RootState) => state.carousel.selectedSlide
  );

  const cards: CardState = useSelector((state: RootState) => state.cards);

  const selectedCard = cards[selectedSlide];

  const accordionStyle = {
    backgroundColor: "#F5F9FF",
    "&.MuiAccordion-root::before": {
      background: "none",
    },
    "&.MuiAccordion-root": {
      boxShadow: "none",
    },
  };

  const renderTransactionIcon = (type: string) => {
    switch (type) {
      case "fileStorage":
        return <img src={fileStorage}></img>;
      case "flights":
        return <img src={flights}></img>;
      case "megaphone":
        return <img src={megaphone}></img>;
      default:
        return <img src={fileStorage}></img>;
    }
  };

  return (
    <div className="flex flex-col gap-6">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
              {selectedCard.transactions.map((transaction, index) => (
                <div
                  className={`flex ${index === 0 ? "pt-4" : ""} ${
                    index === selectedCard.transactions.length - 1
                      ? "border-none"
                      : " border-b-[2px] border-[#F5F5F5]"
                  }`}
                  key={transaction.id}
                >
                  <div className="w-12 h-12 rounded-full bg-[#009DFF1A] flex flex-row items-center justify-center">
                    {renderTransactionIcon(transaction.icon)}
                  </div>
                  <div className="flex flex-col gap-1 ml-3">
                    <div className="text-sm">{transaction.name}</div>
                    <div className="text-[#AAAAAA] text-[13px]">
                      {transaction.date}
                    </div>
                    <div className="flex items-center justify-center mt-3 pb-4">
                      <div className="w-6 h-5 rounded-full bg-[#325BAF] flex flex-row items-center justify-center">
                        <img src={card}></img>
                      </div>
                      <div className="text-[#325BAF] text-[12px] font-semibold ml-2">
                        {transaction.description}
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-auto items-baseline">
                    <div
                      className={`text-sm font-bold ${
                        transaction.type === "credited"
                          ? "text-active"
                          : "text-black"
                      }`}
                    >
                      {transaction.amount}
                    </div>
                    <img src={next} className="ml-[10px]"></img>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#EDFFF5] text-active text-[13px] font-semibold flex justify-center rounded-b-lg !border-[1px] !border-b-[#DDFFEC] py-4 text-center">
              View all card transactions
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RecentTransactions;

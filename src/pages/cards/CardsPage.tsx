import { Tab, Tabs } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import filledPlus from "../../assets/filledPlus.svg";
import AddCardModal from "../../components/AddCardModal";
import { getCards } from "../../apis/mockApi";
import { useDispatch } from "react-redux";
import { setCards } from "../../state/cardSlice";
import CardSection from "../../components/CardSection";
import useDevice from "../../hooks/useDevice";

const renderHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
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
    </>
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
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  const currentDeviceType = useDevice();

  const mediaClassesPanel = useMemo(() => {
    let classes = "";
    switch (currentDeviceType) {
      case "tablet":
        classes = "gap-8 p-8 pt-6";
        break;
      case "laptop":
        classes = "";
        break;
    }
    return classes;
  }, [currentDeviceType]);

  useEffect(() => {
    getCards().then((data: any) => {
      dispatch(setCards(data));
    });
  }, []);

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
        className={`w-full shadow-custom-gray rounded-lg overflow-hidden p-10 pt-8 flex flex-row gap-12 ${
          value !== index ? "hidden" : ""
        } ${mediaClassesPanel}`}
      >
        {value === index && <>{children}</>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-9">
      {renderHeader()}
      <div className="flex flex-col gap-4">
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#23CEFD",
            },
          }}
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
          <CardSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Cards;

import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RootState } from "../../store";
import { CardState } from "../../types/cardTypes";

import aspireLogoWhite from "../../assets/aspireLogoWhite.svg";
import visaLogo from "../../assets/visaLogo.svg";
import "../CarouselCards/CarouselCards.css";
import { setSelectedSlide } from "../../state/carouselSlice";

const CarouselCards = () => {
  const cards: CardState = useSelector((state: RootState) => state.cards);
  const selectedSlide = useSelector(
    (state: RootState) => state.carousel.selectedSlide
  );
  const dispatch = useDispatch();

  const handleSlideChange = (index: number) => {
    dispatch(setSelectedSlide(index));
  };

  return (
    <div className="flex flex-col ">
      <Carousel
        className="carousel-container"
        showStatus={false}
        showIndicators={false}
        selectedItem={selectedSlide}
        onChange={handleSlideChange}
        swipeable={false}
        showArrows={false}
        width={414}
      >
        {cards.map((card) => {
          const lastFourDigits = card.cardNumber.replace(/\s/g, "").slice(-4);
          return (
            <div
              className="bg-active w-[414px] h-[248.85] rounded-xl p-[27px]"
              key={card.id}
            >
              <div className="flex justify-end">
                <img src={aspireLogoWhite}></img>
              </div>
              <div className="text-white text-[24px] font-sans font-bold pt-[28px]">
                {card.cardHolderName}
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
                <div className="text-sm text-white font-bold">
                  {lastFourDigits}
                </div>
              </div>
              <div className="flex flex-row pt-[18px] items-center ">
                <div className="text-[13px] text-white">{card.expiryDate}</div>
                <div className="flex justify-center items-center ml-10">
                  <div className="text-[13px] text-white font-sans">{`CVV: `}</div>
                  <div className="text-[24px] text-white ml-2">***</div>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={visaLogo}></img>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="flex justify-center space-x-2">
        {cards.map((_card, index) => {
          const isActive = selectedSlide === index;
          return isActive ? (
            <div
              key={index}
              className="w-3 h-2 bg-active rounded-xl cursor-pointer"
              onClick={() => handleSlideChange(index)}
            ></div>
          ) : (
            <div
              key={index}
              className="w-2 h-2 bg-active rounded-full opacity-20 cursor-pointer"
              onClick={() => handleSlideChange(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselCards;
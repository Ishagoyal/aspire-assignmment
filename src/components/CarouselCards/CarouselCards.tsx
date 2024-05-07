import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RootState } from "../../store";
import { CardState } from "../../types/cardTypes";

import aspireLogoWhite from "../../assets/aspireLogoWhite.svg";
import visaLogo from "../../assets/visaLogo.svg";
import "../CarouselCards/CarouselCards.css";
import { setSelectedSlide } from "../../state/carouselSlice";

const CarouselCards: React.FC = () => {
  const cards: CardState = useSelector((state: RootState) => state.cards);
  const selectedSlide = useSelector(
    (state: RootState) => state.carousel.selectedSlide
  );
  const dispatch = useDispatch();

  const handleSlideChange = (index: number) => {
    dispatch(setSelectedSlide(index));
  };

  const selectedCard = cards[selectedSlide];

  const items = ["Item 1", "Item 2", "Item 3"];

  const FourDots = () => {
    return (
      <>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </>
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <Carousel
        className="carousel-container"
        showStatus={false}
        showIndicators={false}
        selectedItem={selectedSlide}
        onChange={handleSlideChange}
        swipeable={false}
        showArrows={false}
        showThumbs={false}
      >
        {cards.map((card) => {
          const lastFourDigits = card.cardNumber.replace(/\s/g, "").slice(-4);
          return (
            <div
              className={`bg-active rounded-xl p-7 flex flex-col ${
                card.status === "frozen" ? "opacity-30" : ""
              }`}
              key={card.id}
            >
              <div className="flex justify-end mb-7">
                <img src={aspireLogoWhite}></img>
              </div>
              <div className="text-white text-[24px] font-sans font-bold mb-7">
                {card.cardHolderName}
              </div>
              {selectedCard.cardNumberVisible ? (
                <div className="flex">{card.cardNumber}</div>
              ) : (
                <div className="flex flex-row gap-7 items-center mb-5">
                  {items.map(() => (
                    <div className="flex space-x-2">
                      <FourDots />
                    </div>
                  ))}

                  <div className="text-sm text-white font-bold">
                    {lastFourDigits}
                  </div>
                </div>
              )}

              <div className="flex flex-row items-center mb-1 gap-10">
                <div className="text-[13px] text-white">{card.expiryDate}</div>
                <div className="flex justify-center items-center">
                  <span className="text-[13px] text-white font-sans self-center leading-[24px]">{`CVV: `}</span>
                  <div className="ml-2 h-full w-full flex items-center flex-row pt-2">
                    <span className="text-[24px] text-white h-fit !leading-none ">
                      ***
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={visaLogo}></img>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="flex justify-center space-x-2 ">
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

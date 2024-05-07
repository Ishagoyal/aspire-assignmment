import CarouselCards from "./CarouselCards/CarouselCards";
import RecentTransactions from "./RecentTransactions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleCardVisibility, updateCardStatus } from "../state/cardSlice";
import eye from "../assets/eye.svg";
import freezeCard from "../assets/freezeCard.svg";
import spendLimit from "../assets/spendLimit.svg";
import gPay from "../assets/gPay.svg";
import replaceCard from "../assets/replaceCard.svg";
import deactivateCard from "../assets/deactivateCard.svg";
import { CardState } from "../types/cardTypes";

const CardSection: React.FC = () => {
  const selectedSlide: number = useSelector(
    (state: RootState) => state.carousel.selectedSlide
  );
  const cards: CardState = useSelector((state: RootState) => state.cards);
  const selectedCard = cards[selectedSlide];

  const dispatch = useDispatch();

  const handleFreezeCard = (cardId: number) => {
    const newStatus = selectedCard.status === "active" ? "frozen" : "active";
    dispatch(updateCardStatus({ cardId, newStatus }));
  };

  const handleShowCardNumber = (cardId: number) => {
    const cardNumberVisible = !selectedCard.cardNumberVisible;
    dispatch(toggleCardVisibility({ cardId, cardNumberVisible }));
  };

  const CartActions = () => {
    return (
      <div className="bg-[#EDF3FF] rounded-xl px-8 py-5 flex flex-row gap-8">
        <div
          className="flex flex-col  gap-2 cursor-pointer"
          onClick={() => handleFreezeCard(selectedCard.id)}
        >
          <img src={freezeCard} className="h-8 w-8 flex self-center"></img>
          <div className="text-[13px] flex text-center  justify-center">
            {selectedCard.status === "frozen" ? "Unfreeze Card" : "Freeze Card"}
          </div>
        </div>
        <div className="flex flex-col  cursor-pointer max-w-16">
          <img src={spendLimit} className="h-8 w-8 flex self-center"></img>
          <div className="text-[13px] pt-2 flex text-center  justify-center">
            Set spend limit
          </div>
        </div>
        <div className="flex flex-col  cursor-pointer">
          <img src={gPay} className="h-8 w-8 flex self-center"></img>
          <div className="text-[13px] pt-2 flex text-center justify-center">
            Add to GPay
          </div>
        </div>
        <div className="flex flex-col  cursor-pointer">
          <img src={replaceCard} className="h-8 w-8 flex self-center"></img>
          <div className="text-[13px] pt-2 flex text-center justify-center">
            Replace card
          </div>
        </div>
        <div className="flex flex-col  cursor-pointer">
          <img src={deactivateCard} className="h-8 w-8 flex self-center"></img>
          <div className="text-[13px] pt-2 flex text-center justify-center">
            Cancel card
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-[48%]">
        <div className="flex flex-col gap-3">
          <div
            className="self-end flex flex-row cursor-pointer"
            onClick={() => handleShowCardNumber(selectedCard.id)}
          >
            <img src={eye}></img>
            <div className="text-active font-bold text-[12px] ml-2">
              {selectedCard.cardNumberVisible
                ? "Hide Card Number"
                : "Show card number"}
            </div>
          </div>
          <CarouselCards />
        </div>
        <CartActions />
      </div>
      <div className="w-[48%] pt-7">
        <RecentTransactions />
      </div>
    </>
  );
};

export default CardSection;

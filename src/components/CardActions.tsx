import CarouselCards from "./CarouselCards/CarouselCards";
import RecentTransactions from "./RecentTransactions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateCardStatus } from "../state/cardSlice";
import eye from "../assets/eye.svg";
import freezeCard from "../assets/freezeCard.svg";
import spendLimit from "../assets/spendLimit.svg";
import gPay from "../assets/gPay.svg";
import replaceCard from "../assets/replaceCard.svg";
import deactivateCard from "../assets/deactivateCard.svg";

function CardActions() {
  const selectedSlide = useSelector(
    (state: RootState) => state.carousel.selectedSlide
  );

  const cards = useSelector((state: RootState) => state.cards);

  const selectedCard = cards[selectedSlide];
  const dispatch = useDispatch();

  const handleFreezeCard = (cardId: number) => {
    const newStatus = selectedCard.status === "active" ? "frozen" : "active";
    dispatch(updateCardStatus({ cardId, newStatus }));
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
          <CarouselCards />
          <div className="bg-[#EDF3FF] rounded-xl px-8 py-5 mt-8 w-[414px] flex flex-row gap-8">
            <div
              className="flex flex-col col-span-2 w-12 cursor-pointer"
              onClick={() => handleFreezeCard(selectedCard.id)}
            >
              <img src={freezeCard} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center w-[40px] justify-center">
                {selectedCard.status === "frozen"
                  ? "Unfreeze Card"
                  : "Freeze Card"}
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={spendLimit} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center w-[63px] justify-center">
                Set spend limit
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={gPay} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center justify-center">
                Add to GPay
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img src={replaceCard} className="h-8 w-8 flex self-center"></img>
              <div className="text-[13px] pt-2 flex text-center justify-center">
                Replace card
              </div>
            </div>
            <div className="flex flex-col col-span-2 w-12 cursor-pointer">
              <img
                src={deactivateCard}
                className="h-8 w-8 flex self-center"
              ></img>
              <div className="text-[13px] pt-2 flex text-center justify-center">
                Cancel card
              </div>
            </div>
          </div>
        </div>
        <RecentTransactions />
      </div>
    </div>
  );
}

export default CardActions;

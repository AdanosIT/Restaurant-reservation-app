import RestaurantDescription from "../components/RestaurantDescription";
import RestaurantImages from "../components/RestaurantImages";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantRating from "../components/RestaurantRating";
import RestaurantReservation from "../components/RestaurantReservation";
import RestaurantReview from "../components/RestaurantReview";
import RestaurantTitle from "../components/RestaurantTitle";

const RestaurantDetails = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <RestaurantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReview />
      </div>
      <div className="w-[27%] relative text-reg">
        <RestaurantReservation />
      </div>
    </>
  );
};

export default RestaurantDetails;

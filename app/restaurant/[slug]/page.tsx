import Navbar from "@/app/components/Navbar";

import RestaurantDescription from "../components/RestaurantDescription";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantImages from "../components/RestaurantImages";
import RestaurantNavBar from "../components/RestaurantNavbar";
import RestaurantRating from "../components/RestaurantRating";
import RestaurantReservation from "../components/RestaurantReservation";
import RestaurantReview from "../components/RestaurantReview";
import RestaurantTitle from "../components/RestaurantTitle";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader />

        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetails;

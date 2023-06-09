import RestaurantMenuCard from "./RestaurantMenuCard";

const Menu = () => {
  return (
    <section className="bg-white mt-5">
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <RestaurantMenuCard />
      </div>
    </section>
  );
};

export default Menu;

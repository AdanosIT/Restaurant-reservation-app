import ReserveForm from "../components/ReserveForm";
import ReserveHeader from "../components/ReserveHeader";

const Reserve = () => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReserveHeader />
        <ReserveForm />
      </div>
    </div>
  );
};

export default Reserve;

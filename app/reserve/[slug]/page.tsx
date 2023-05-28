import Navbar from "@/app/components/Navbar";

import ReserveForm from "../components/ReserveForm";
import ReserveHeader from "../components/ReserveHeader";

const Reserve = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reserve;
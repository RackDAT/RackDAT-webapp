import React from "react";
import AnadirForm from "./anadirForm";
import { MdAddShoppingCart } from "react-icons/md";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 top-0 z-20 bg-[#F5F5F5]">
        <MdAddShoppingCart className="w-6 h-6" />
        <div className="text-xl">Añadir item o reactivo</div>
      </div>
      <AnadirForm />
    </div>
  );
};

export default page;

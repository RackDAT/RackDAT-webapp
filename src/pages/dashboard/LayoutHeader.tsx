import React from "react";
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { ImLab } from "react-icons/im";
import { MdInventory } from "react-icons/md";

type Props = {
  title: "Solicitudes" | "Laboratorios" | "Home" | "Items";
};

const IconTitle = {
  Solicitudes: <AiOutlineUnorderedList className="w-6 h-6" />,
  Laboratorios: <ImLab className="w-6 h-6" />,
  Home: <AiFillHome className="w-6 h-6" />,
  Items: <MdInventory className="w-6 h-6" />,
};

const LayoutHeader = (props: Props) => {
  return (
    <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 sticky top-0 z-20 bg-[#F5F5F5]">
      {IconTitle[props.title]}
      <div className="text-xl">{props.title}</div>
    </div>
  );
};

export default LayoutHeader;

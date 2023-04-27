import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { ImLab } from "react-icons/im";

type Props = {
  title: "solicitudes" | "laboratorios";
};

const IconTitle = {
  solicitudes: <AiOutlineUnorderedList className="w-6 h-6" />,
  laboratorios: <ImLab className="w-6 h-6" />,
};

const LayoutHeader = (props: Props) => {
  return (
    <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 sticky top-0 z-20 bg-[#F5F5F5]">
      <AiOutlineUnorderedList className="w-6 h-6" />
      {IconTitle[props.title]}
      <div className="text-xl">{props.title}</div>
    </div>
  );
};

export default LayoutHeader;

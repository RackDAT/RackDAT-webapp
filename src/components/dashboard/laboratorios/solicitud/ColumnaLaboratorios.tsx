import React, { useEffect } from "react";
import Laboratory from "@/assets/interfaces/laboratory";
import Image from "next/image";
import { useState } from "react";

import img from "@/assets/img/lab.jpg";
import { BsFastForwardFill } from "react-icons/bs";

type Props = { laboratories: Laboratory[] };

const ColumnaLaboratorios = ({ laboratories }: Props) => {
  const [selectedLaboratory, setSelectedLaboratory] = useState<Laboratory>();
  useEffect(() => {
    setSelectedLaboratory(laboratories[0]);
  }, []);

  const changeSelectedLaboratory = (laboratory: Laboratory) => {
    setSelectedLaboratory(laboratory);
  };

  return (
    <div className=" w-1/4 h-full border-2 rounded-lg bg-slate-50 shadow-lg overflow-hidden">
      <div className=" overflow-hidden w-full max-h-screen">
        <Image
          src={selectedLaboratory?.imagen || img}
          width={1000}
          height={1000}
          alt="laboratorio"
          className="w-full h-24 object-cover"
        />
        <div className="flex flex-col overflow-hidden">
          {laboratories.map((laboratory, index) => {
            if (selectedLaboratory === undefined) {
              return <div key={index}></div>;
            }
            return (
              <LabCard
                laboratory={laboratory}
                key={index}
                changeSelectedLaboratory={changeSelectedLaboratory}
                selected={selectedLaboratory.id === laboratory.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type LabCardProps = {
  laboratory: Laboratory;
  key: number;
  changeSelectedLaboratory: (laboratory: Laboratory) => void;
  selected: boolean;
};
const LabCard = ({
  laboratory,
  changeSelectedLaboratory,
  selected,
}: LabCardProps) => {
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div
      className={
        isSelected
          ? "bg-orange-400 text-white p-2 flex justify-between items-center cursor-pointer font-normal tracking-wider border-b-2 min-h-[60px] duration-300"
          : "bg-white text-slate-400 p-2 flex justify-between border-b-2 items-center cursor-pointer min-h4 duration-300 min-h-[40px]"
      }
      onClick={() => {
        changeSelectedLaboratory(laboratory);
      }}
    >
      <h1>{laboratory.lab}</h1>
      <BsFastForwardFill />
      {/* <h3>{laboratory.}</h3> */}
    </div>
  );
};

export default ColumnaLaboratorios;

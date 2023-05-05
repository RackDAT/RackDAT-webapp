import React, { useEffect } from "react";
import Laboratory from "@/assets/interfaces/laboratory";
import Image from "next/image";
import { useState } from "react";

import img from "@/assets/img/lab.jpg";
import { BsFastForwardFill } from "react-icons/bs";

type Props = { laboratories: Laboratory[] };

const ColumnaLaboratorios = ({ laboratories }: Props) => {
  const [selectedLaboratory, setSelectedLaboratory] = useState<number>();
  useEffect(() => {
    setSelectedLaboratory(laboratories[0].id);
  }, []);

  const changeSelectedLaboratory = (id: number) => {
    setSelectedLaboratory(id);
  };

  return (
    <div className="mt-6 w-full">
      <h1 className="font-semibold text-xl">Laboratorio</h1>

      <div className="rounded-lg overflow-hidden w-1/5 max-h-screen my-4">
        <Image
          src={img}
          alt="laboratorio"
          className="w-full h-24 object-cover"
        />

        <div className="flex flex-col overflow-hidden">
          {laboratories.map((laboratory, index) => {
            return (
              <LabCard
                laboratory={laboratory}
                key={index}
                changeSelectedLaboratory={changeSelectedLaboratory}
                selected={selectedLaboratory === laboratory.id}
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
  changeSelectedLaboratory: (id: number) => void;
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
          ? "bg-orange-400 text-white p-2 flex justify-between items-center cursor-pointer font-normal tracking-wider border-b-2 min-h-[90px] duration-300"
          : "bg-white text-slate-400 p-2 flex justify-between border-b-2 items-center cursor-pointer min-h4 duration-300 min-h-[60px]"
      }
      onClick={() => {
        changeSelectedLaboratory(laboratory.id);
      }}
    >
      <h1>{laboratory.lab}</h1>
      <BsFastForwardFill />
      {/* <h3>{laboratory.}</h3> */}
    </div>
  );
};

export default ColumnaLaboratorios;

import React, { useEffect, useMemo } from "react";
import Laboratory from "@/assets/interfaces/laboratory";
import Image from "next/image";
import { useState } from "react";

import img from "@/assets/img/lab.jpg";
import { BsFastForwardFill } from "react-icons/bs";

type Props = {
  laboratories: Laboratory[];
  idSelectedLaboratory: number;
  setSelectedIdLaboratory: (laboratoryId: number) => void;
};

const ColumnaLaboratorios = ({
  laboratories,
  idSelectedLaboratory,
  setSelectedIdLaboratory,
}: Props) => {
  const changeSelectedLaboratory = (laboratoryId: number) => {
    setSelectedIdLaboratory(laboratoryId);
  };

  const selectedLaboratory: Laboratory | undefined = useMemo(
    () =>
      laboratories.find((laboratory) => laboratory.id === idSelectedLaboratory),
    [idSelectedLaboratory, laboratories]
  );

  return (
    <div className=" w-[28%] h-full border-2 rounded-lg bg-slate-50 shadow-lg overflow-hidden">
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
                changeSelectedLaboratory={() =>
                  changeSelectedLaboratory(laboratory.id)
                }
                selected={idSelectedLaboratory === laboratory.id}
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
  const defaultStyles =
    "p-2 flex justify-between items-center cursor-pointer border-b-2 flex-no-wrap gap-2" +
    " ";
  return (
    <div
      className={
        isSelected
          ? defaultStyles +
            "bg-yellow-400 text-white font-normal tracking-wider border-b-2 min-h-[60px] duration-300"
          : defaultStyles +
            "bg-slate-100 text-slate-400 min-h4 duration-300 min-h-[40px]"
      }
      onClick={() => {
        changeSelectedLaboratory(laboratory);
      }}
    >
      <div>
        <h1>{laboratory.lab}</h1>
      </div>
      <BsFastForwardFill />
    </div>
  );
};

export default ColumnaLaboratorios;

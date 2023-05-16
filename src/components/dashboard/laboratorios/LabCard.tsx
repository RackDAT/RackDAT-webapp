import React from "react";
import Laboratory from "@/assets/interfaces/laboratory";
import { useRouter } from "next/dist/client/router";
import Image from "next/dist/client/image";

type Props = {
  laboratory: Laboratory;
  index: number;
};

const LabCard = ({ laboratory, index }: Props) => {
  const router = useRouter();

  const redirectSingleLabView = (id: number) => {
    router.push(`/dashboard/laboratorios/${id}`);
  };
  const secondsOfAnimation = 1 + index * 0.1;
  const secondsOfAnimationString = secondsOfAnimation.toString();
  return (
    <div
      className={`flex rounded-lg bg-white shadow-lg w-[260px] flex-col overflow-hidden min-w-[200px] hover:scale-[1.01] hover:cursor-pointer `}
      onClick={() => {
        redirectSingleLabView(laboratory.id);
      }}
    >
      <div className={`w-full h-[100px] bg-cover bg-center relative`}>
        <Image
          src={laboratory.imagen}
          alt="hello"
          className="h-full w-full absolute z-10 object-cover"
          width={200}
          height={200}
        />
        <div className="bg-white w-fit px-2 rounded-full z-10 border-2">
          <label className="text-xs text-green-600">Disponible</label>
        </div>
      </div>
      <div className="py-[5px] px-2 flex flex-col min-h-[60px] justify-between z-0">
        <label className="text-sm">{laboratory.laboratorio}</label>
        <label className="text-slate-400 text-xs">Capacidad: 20 personas</label>
      </div>
    </div>
  );
};

export default LabCard;

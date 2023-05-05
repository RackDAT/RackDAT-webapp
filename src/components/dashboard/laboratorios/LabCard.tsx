import React from "react";
import Laboratory from "@/assets/interfaces/laboratory";
import { useRouter } from "next/dist/client/router";

type Props = {
  laboratory: Laboratory;
};

const LabCard = ({ laboratory }: Props) => {
  const router = useRouter();

  const redirectSingleLabView = (id: number) => {
    router.push(`/dashboard/laboratorios/${id}`);
  };

  return (
    <div
      className="flex rounded-lg bg-white shadow-lg flex-col overflow-hidden min-w-[200px] hover:scale-[1.01] hover:cursor-pointer"
      onClick={() => {
        redirectSingleLabView(laboratory.id);
      }}
    >
      <div className="bg-[url('https://th.bing.com/th/id/OIP.6eL9Wao8pSOyi8LwaXfSUQHaE8?pid=ImgDet&rs=1')] w-full h-[100px] bg-cover bg-center p-2">
        <div className="bg-white w-fit px-2 rounded-full">
          <label className="text-xs text-green-600">Disponible</label>
        </div>
      </div>
      <div className="py-[5px] px-2 flex flex-col min-h-[60px] justify-between">
        <label className="text-sm">{laboratory.lab}</label>
        <label className="text-slate-400 text-xs">Capacidad: 20 personas</label>
      </div>
    </div>
  );
};

export default LabCard;

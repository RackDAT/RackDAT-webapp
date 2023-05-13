import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import { TbClockHour3 } from "react-icons/tb";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { GetServerSideProps } from "next";
import { BsFillGearFill } from "react-icons/bs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date2 = new Date();
  return {
    props: {
      date: 1,
    },
  };
};

type Props = {
  id_tipo_solicitud: number;
};

const SolicitudInfomationColumn = ({ id_tipo_solicitud }: Props) => {
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    const date = new Date();
    setDate(date);
  }, []);

  if (date === null) return <div></div>;
  return (
    <div className="flex flex-col rounded-xl bg-white shadow py-6 px-4 gap-4">
      {id_tipo_solicitud === 3 ? (
        <div className="flex items-center gap-2">
          <ImLab className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Solicitud de Laboratorio</h1>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <BsFillGearFill className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Solicitud de Equipos</h1>
        </div>
      )}
      {id_tipo_solicitud === 3 ? (
        <div className=" flex flex-col gap-2">
          <label className="uppercase text-slate-300">Justificacion</label>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            quisquam laudantium cum, libero vitae voluptatem cumque blanditiis
            voluptas, itaque mollitia quibusdam amet non? Est similique deserunt
            beatae quidem nemo esse. Lo necesito uwu.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-4">
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-300">Justificacion</label>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              quisquam laudantium cum, libero vitae voluptatem cumque blanditiis
              voluptas, itaque mollitia quibusdam amet non? Est similique
              deserunt beatae quidem nemo esse. Lo necesito uwu.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-300">Items</label>
            <ul className="list-disc px-5">
              <li>Tablet</li>
              <li>Taladro</li>
              <li>Ametralladora</li>
              <li>Cables</li>
            </ul>
          </div>
        </div>
      )}
      <div className="w-full justify-center flex">
        <div className="flex gap-10">
          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">Solicitud</label>
            <TbClockHour3 className="w-10 h-10 text-primary" />
            <label>{date.toDateString().toString()}</label>
            <label className="">
              {date.getHours().toString() +
                ":" +
                date.getMinutes().toString() +
                ":" +
                date.getSeconds().toString()}
            </label>
          </div>

          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">
              {id_tipo_solicitud === 3 ? (
                <label>Ingreso</label>
              ) : (
                <label>Préstamo</label>
              )}
            </label>
            <BiLogIn className="w-10 h-10 text-primary" />
            <label>{date.toDateString().toString()}</label>
            <label>
              {date.getHours().toString() +
                ":" +
                date.getMinutes().toString() +
                ":" +
                date.getSeconds().toString()}
            </label>
          </div>

          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">
              {id_tipo_solicitud === 3 ? (
                <label>Egreso</label>
              ) : (
                <label>Devolución</label>
              )}
            </label>
            <BiLogOut className="w-10 h-10 text-primary" />
            <label>{date.toDateString().toString()}</label>
            <label>
              {date.getHours().toString() +
                ":" +
                date.getMinutes().toString() +
                ":" +
                date.getSeconds().toString()}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitudInfomationColumn;

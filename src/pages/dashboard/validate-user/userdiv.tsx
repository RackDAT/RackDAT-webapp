import React from "react";
import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";

type Props = {
  user: User;
  onAproveUser: (userId: number, value: boolean) => void;
  onDeleteUser: (userId: number) => void;
};

const UserDiv = ({ user, onAproveUser, onDeleteUser }: Props) => {
  const handleAproveUser = () => {
    onAproveUser(user.id, true);
  };

  const handleDeleteUser = () => {
    onDeleteUser(user.id);
  };

  return (
    <div className=" w-full flex bg-white rounded-xl flex-col hover:scale-[100.5%] duration-200 shadow-md">
      {/* header */}
      <div className="border-b-2 w-full border-neutral-300 px-4 py-1 flex justify-between">
        <span className="text-neutral-400">{user.correo}</span>
        <span className="text-neutral-400">{user.clave}</span>
      </div>

      {/* content? */}
      <div className="p-4 flex gap-2 items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-28 h-28 ml-10 mr-5 rounded-full"
          />
          <div className="flex flex-col justify-between h-5/6">
            <h1 className="text-2xl">
              {user.nombre} {user.apellido_pat}
            </h1>
            <label className="text-neutral-500 text-md">
              {user.carrera.carrera}
            </label>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2 mr-10">
          <Btn style="strong" onClick={handleAproveUser}>
            <p className="text-lg">Aprobar</p>
          </Btn>
          <Btn style="light" onClick={handleDeleteUser}>
            <p className="text-lg">Rechazar</p>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default UserDiv;

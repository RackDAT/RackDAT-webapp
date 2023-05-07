"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../../components/dashboard/Layout";
import Btn from "@/components/global/Btn";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import UserDiv from "../../../components/dashboard/validate-user/PendingUserdiv";
import User from "@/assets/interfaces/users";
import axios, { AxiosResponse, AxiosError } from "axios";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { toast, ToastContainer } from "react-toastify";
import { GetServerSideProps } from "next";

type Props = {
  users: User[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<User[]>(
    "https://rackdat.onrender.com/api/RackDAT/usuarios"
  );
  const users = response.data.filter((user) => user.verificado === false);
  return {
    props: {
      users: users,
    },
  };
};

const ValidateUser = ({ users }: Props) => {
  const [search, setSearch] = useState("");
  const [pendingUsers, setUsers] = useState<User[]>(users);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const aproveUser = (userId: number, value: boolean) => {
    try {
      axios.put<User>(
        `https://rackdat.onrender.com/api/RackDAT/usuario/id:int?id=${userId}&verificacion=${value}`
      );
      setUsers(pendingUsers.filter((user) => user.id !== userId));
      notifySuccessAprove();
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };

  const deleteUser = (userId: number) => {
    try {
      axios.delete<User>(
        `https://rackdat.onrender.com/api/RackDAT/usuario/id:int?id=${userId}`
      );
      setUsers(pendingUsers.filter((user) => user.id !== userId));
      notifySuccessDelete();
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };

  const notifySuccessAprove = () => {
    toast.success("Usuario aprobado", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notifySuccessDelete = () => {
    toast.info("Usuario rechazado", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notifyError = () => {
    toast.error("Hubo un error, inténtalo de nuevo", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Layout>
      <div className="flex flex-col">
        {/* header */}
        <LayoutHeader title="Validar Usuarios" />
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between px-10 mt-7 items-center">
            <div className="flex items-center justify-start bg-gray-200 text-gray-600 h-7 w-1/4 rounded-lg p-3 gap-2 hover:bg-gray-300 hover:scale-[100.5%] duration-200 hover:shadow-md">
              <AiOutlineSearch className="w-5 h-5"></AiOutlineSearch>
              <form>
                <input
                  type="text"
                  value={search}
                  placeholder="Buscar"
                  className="bg-transparent w-fit"
                />
              </form>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            {pendingUsers.map((user) => (
              <UserDiv
                user={user}
                key={user.id}
                onAproveUser={aproveUser}
                onDeleteUser={deleteUser}
              />
            ))}
            <ToastContainer autoClose={1000} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValidateUser;

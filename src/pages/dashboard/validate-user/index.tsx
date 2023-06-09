"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../../components/dashboard/Layout";
import Btn from "@/components/global/Btn";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import PendingUserDiv from "../../../components/dashboard/validate-user/PendingUserdiv";
import User from "@/assets/interfaces/users";
import axios, { AxiosResponse, AxiosError } from "axios";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { toast, ToastContainer } from "react-toastify";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { validateUserRole } from "../../../assets/middlewares/validateUserRole";
import SearchBar from "@/components/dashboard/items/SearchBar";

type Props = {};

const ValidateUser = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const getUnverifiedUsers = async (idCarrera: number) => {
    const response = await axios
      .get(
        `https://rackdat.onrender.com/Usuarios/usuarios/not-verificados/carrera/${idCarrera}`
      )
      .then((res) => {
        setPendingUsers(res.data);
        setUsers(res.data);
      });
  };

  useEffect(() => {
    const validated = validateUserRole();
    if (!validated) {
      router.push("/403");
    }

    const getUserCarrera = (): number => {
      const userJSON = localStorage.getItem("user");
      if (userJSON) {
        const user = JSON.parse(userJSON);
        if (user && user.id_carrera) {
          return user.id_carrera;
        }
      }
      return 0;
    };

    getUnverifiedUsers(getUserCarrera());
  }, []);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const filterPendingUsers = (filterPendingUserString: string) => {
    if (filterPendingUserString === "") {
      setPendingUsers(users);
    }
    const newUsers = users.filter((user) => {
      return (
        user.nombre
          .toLowerCase()
          .includes(filterPendingUserString.toLowerCase()) ||
        user.apellido_pat
          .toLowerCase()
          .includes(filterPendingUserString.toLowerCase())
      );
    });
    setPendingUsers(newUsers);
  };

  const aproveUser = (userId: number, value: boolean) => {
    try {
      axios.put<User>(
        `https://rackdat.onrender.com/api/RackDAT/usuario/id:int?id=${userId}&verificacion=${value}`
      );
      setPendingUsers(pendingUsers.filter((user) => user.id !== userId));
      notifySuccessAprove();
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };

  const deleteUser = (userId: number) => {
    try {
      axios.delete<User>(
        `https://rackdat.onrender.com/Usuarios/usuario/${userId}`
      );
      setPendingUsers(pendingUsers.filter((user) => user.id !== userId));
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
          <div className="flex justify-between  mt-7 items-center">
            <SearchBar filterItems={filterPendingUsers} />
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            {pendingUsers.map((user) => (
              <PendingUserDiv
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

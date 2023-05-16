import React, { useEffect, useState } from "react";
import UserDiv from "../../../components/dashboard/user/userdiv";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Layout from "../../../components/dashboard/Layout";
import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";
import { useRouter } from "next/router";
import axios, { AxiosResponse, AxiosError } from "axios";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { GetServerSideProps } from "next";
import SearchBar from "@/components/dashboard/items/SearchBar";
import { validateUserRole } from "../../../assets/middlewares/validateUserRole";
import https from "https";

type Props = {
  users: User[];
  qtyPendingUsers: number;
};

const Solicitudes = () => {
  const router = useRouter();
  const [usersClient, setUsers] = useState<User[]>([]);
  const [users, setUsersServer] = useState<User[]>([]);
  const [qtyPendingUsers, setQtyPendingUsers] = useState<number>(0);

  const getAllUsers = async () => {
    const users = axios
      .get<User[]>(
        "https://rackdat.onrender.com/Usuarios/GetUsuariosVerificados"
      )
      .then((res) => {
        setUsers(res.data);
        setUsersServer(res.data);
      });

    const qtyPendingUsers = axios
      .get<number>(
        "https://rackdat.onrender.com/Usuarios/usuarios/not-verificados/cantidad"
      )
      .then((res) => setQtyPendingUsers(res.data));
  };

  const getCarrerUsers = async (carreraId: number) => {
    const users = axios
      .get<User[]>(
        `https://rackdat.onrender.com/Usuarios/usuarios/carrera/${carreraId}`
      )
      .then((res) => {
        setUsers(res.data);
        setUsersServer(res.data);
      });

    const qtyPendingUsers = axios
      .get<number>(
        `https://rackdat.onrender.com/Usuarios/usuarios/not-verificados/cantidad/carrera/${carreraId}`
      )
      .then((res) => setQtyPendingUsers(res.data));
  };

  useEffect(() => {
    const validated = validateUserRole();
    if (!validated) {
      router.push("/403");
    }

    let userType;
    let user;
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      user = JSON.parse(userJSON);
      if (user && user.id_tipo_usuario) {
        userType = user.id_tipo_usuario;
      }
    }
    if (userType === 3) {
      getAllUsers();
    } else if (userType === 4) {
      getCarrerUsers(user.id_carrera);
    }
  }, []);

  const [search, setSearch] = useState<string>("");

  const filterUsers = (filterUserString: string) => {
    if (filterUserString === "") {
      setUsers(users);
    }
    const newUsers = users.filter((user) => {
      return (
        user.nombre.toLowerCase().includes(filterUserString.toLowerCase()) ||
        user.apellido_pat.toLowerCase().includes(filterUserString.toLowerCase())
      );
    });
    setUsers(newUsers);
  };

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleButtonClick = () => {
    router.push("/dashboard/validate-user");
  };

  const getUserRole = (): number => {
    if (typeof window !== "undefined") {
      const userRole = localStorage.getItem("id_tipo_usuario");
      if (userRole) {
        const finalRole = parseInt(userRole);
        return finalRole;
      }
    }
    return 0;
  };

  return (
    <Layout>
      <div className="flex flex-col">
        {/* header */}
        <LayoutHeader title="Usuarios" />
        <div className=" overflow-y-auto w-[90%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between mt-5 items-center">
            <div className="w-[400px]">
              <SearchBar
                filterItems={filterUsers}
                placeholder="Buscar usuarios"
              />
            </div>
            <div className="flex justify-end">
              <div className="relative p-2 min-w-fit">
                {getUserRole() != 4 ? (
                  <div></div>
                ) : (
                  <Btn style="dark" onClick={handleButtonClick}>
                    <label className="text-sm">Nuevas solicitudes</label>
                    <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3 absolute right-0 top-0">
                      {qtyPendingUsers}
                    </div>
                  </Btn>
                )}
              </div>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-2 flex flex-col">
            {usersClient.map((user, index) => (
              <UserDiv user={user} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;

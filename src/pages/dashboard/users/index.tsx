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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get<User[]>(
    "https://rackdat.onrender.com/Usuarios/GetUsuariosVerificados"
  );
  const users = response.data.filter((user) => user.verificado);
  const pendingUsers = response.data.filter(
    (user) => user.verificado === false
  );
  const qtyPendingUsers = pendingUsers.length;
  return {
    props: {
      users: users,
      qtyPendingUsers: qtyPendingUsers,
    },
  };
};

const Solicitudes = ({ users, qtyPendingUsers }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const validated = validateUserRole();
    if (!validated) {
      router.push("/403");
    }
  }, []);

  const [usersClient, setUsers] = useState<User[]>(users);
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

  return (
    <Layout>
      <div className="flex flex-col">
        {/* header */}
        <LayoutHeader title="Usuarios" />
        <div className=" overflow-y-auto w-[90%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between mt-5 items-center">
            <div className="w-[400px]">
              <SearchBar filterItems={filterUsers} />
            </div>
            <div className="flex justify-end">
              <div className="relative p-2 min-w-fit">
                <Btn style="dark" onClick={handleButtonClick}>
                  <label className="text-sm">Nuevas solicitudes</label>
                </Btn>
              </div>
              <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3 absolute">
                {qtyPendingUsers}
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

"use client";

import React, { useEffect, useState } from "react";
import UserDiv from "../../../components/dashboard/userlist/Userdiv";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Layout from "../../../components/dashboard/Layout";
import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";
import { useRouter } from "next/router";
import axios, { AxiosResponse, AxiosError } from "axios";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";

type Props = {};

const Solicitudes = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [pendingUsers, setPendingUsers] = useState(0);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://rackdat.onrender.com/api/RackDAT/usuarios"
      );
      const filteredUsers = response.data.filter((user) => user.verificado);
      const qtyPendingUsers = response.data.filter(
        (user) => user.verificado === false
      );
      setUsers(filteredUsers);
      setPendingUsers(qtyPendingUsers.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between px-10 mt-5 items-center">
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
            <div className="flex justify-end">
              <div className="relative p-2">
                <Btn style="dark" onClick={handleButtonClick}>
                  Nuevas solicitudes
                </Btn>
              </div>
              <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3 absolute">
                {pendingUsers}
              </div>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            {users.map((user, index) => (
              <UserDiv user={user} key={index} />
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;

"use client";

import React, { useEffect, useState } from "react";
import UserDiv from "./userdiv";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Layout from "../layout";
import Btn from "@/components/global/Btn";
import User from "@/components/interfaces/users";
import axios, { AxiosResponse, AxiosError } from "axios";

type Props = {};

const Solicitudes = (props: Props) => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://rackdat.onrender.com/api/RackDAT/usuarios"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const [search, setSearch] = useState("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        {/* header */}
        <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 sticky top-0 z-20 bg-[#F5F5F5] justify-between">
          <div className="flex gap-2">
            <FaUserCircle className="w-6 h-6" />
            <div className="text-xl">Usuarios</div>
          </div>
          <div className="flex justify-end">
            <div className="relative p-2">
              <Btn style="dark">Nuevas solicitudes</Btn>
            </div>
            <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3 absolute">
              2
            </div>
          </div>
        </div>
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
            {users
              .filter((user) => user.verificado)
              .map((user) => (
                <UserDiv user={user} />
              ))}
          </div>

          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;

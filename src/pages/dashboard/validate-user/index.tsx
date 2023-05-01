"use client";

import React, { useState } from "react";
import Layout from "../layout";
import Btn from "@/components/global/Btn";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import UserDiv from "./userdiv";

const ValidateUser = () => {
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
            <AiOutlineUserAdd className="w-6 h-6" />
            <div className="text-xl">Validar usuarios</div>
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
            <UserDiv />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValidateUser;

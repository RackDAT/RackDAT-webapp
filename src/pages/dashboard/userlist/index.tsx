"use client";

import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import UserDiv from "./userdiv";
import { GoSettings } from "react-icons/go";
import Layout from "../layout";
type Props = {};

const Solicitudes = (props: Props) => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* header */}
        <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 sticky top-0 z-20 bg-[#F5F5F5]">
          <AiOutlineUnorderedList className="w-6 h-6" />
          <div className="text-xl">Solicitudes</div>
        </div>
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between px-10 mt-7 items-center">
            <div className="flex gap-4 items-center">
              <div className="p-2 hover:bg-black duration-[70ms] hover:text-white cursor-pointer rounded-lg border-2">
                <GoSettings className="w-7 h-7" />
              </div>
              <label className="text-xl font-bold">Todas</label>
            </div>
            <div className="flex gap-2">
              <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3">
                <div>2</div>
              </div>
              <label>solicitudes</label>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            <UserDiv />
          </div>

          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;

import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import SolicitudDiv from "./SolicitudDiv";
import { GoSettings } from "react-icons/go";
import Layout from "../layout";
import LayoutHeader from "../LayoutHeader";

type Props = {};

const Solicitudes = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="flex flex-col">
        {/* header */}
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between px-10 mt-7 items-center">
            <div className="flex gap-2">
              <div className="rounded-full bg-orange-400 w-5 h-5 flex items-center justify-center text-white p-3">
                <div>2</div>
              </div>
              <label>solicitudes</label>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            <SolicitudDiv />
            <SolicitudDiv />
            <SolicitudDiv />
            <SolicitudDiv />
            <SolicitudDiv />
          </div>

          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;

import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import SolicitudUserColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudUserColumn";
import SolicitudInfomationColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudInfomationColumn";
import Btn from "@/components/global/Btn";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="w-[90%] m-auto mt-10 flex gap-2">
        <SolicitudUserColumn />
        <SolicitudInfomationColumn />
      </div>
      <Btn style="strong">Acceptar</Btn>
      <Btn style="light">Rechazar</Btn>
    </Layout>
  );
};

export default index;

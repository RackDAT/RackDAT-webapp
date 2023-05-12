import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import SolicitudUserColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudUserColumn";
import SolicitudInfomationColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudInfomationColumn";
import Btn from "@/components/global/Btn";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

type Props = {
  id_tipo_solicitud: number;
};

const Index = ({ id_tipo_solicitud }: Props) => {
  const router = useRouter();

  const handleAceptar = () => {
    toast.success("Deafault Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      router.push("/dashboard/solicitudes?status=${fssdf}");
    }, 1000);
  };

  const handleRechazar = () => {
    toast.success("Deafault Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTimeout(() => {}, 1000);
    router.push("/dashboard/solicitudes");
  };

  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="w-[90%] flex flex-col m-auto">
        <div className=" m-auto mt-10 flex gap-2">
          <SolicitudUserColumn />
          <SolicitudInfomationColumn id_tipo_solicitud={id_tipo_solicitud} />
        </div>
        <div className="mt-3 flex gap-2 self-end">
          <Btn style="strong" onClick={handleAceptar}>
            Acceptar
          </Btn>
          <Btn style="light" onClick={handleRechazar}>
            Rechazar
          </Btn>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Index;

import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import SolicitudUserColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudUserColumn";
import SolicitudInfomationColumn from "@/components/dashboard/solicitudes/singleSolicitud/SolicitudInfomationColumn";
import Btn from "@/components/global/Btn";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { userIsLogged } from "@/assets/middlewares/authUser";
import axios from "axios";
import { GetServerSideProps } from "next";
import ISolicitud from "@/assets/interfaces/solicitud";
import { error } from "console";

// usar contexto para sacar el id, hacer get para sacar el tipo_de_solicitud_id y con eso manejar los divs

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const itemIds = ctx.query.idSolicitud;
  const solicitud = await axios
    .get(`https://rackdat.onrender.com/Solicitudes/solicitud/${itemIds}`)
    .then((res) => res.data);

  return {
    props: {
      solicitud: solicitud,
    },
  };
};

type Props = { solicitud: ISolicitud };

const Index = ({ solicitud }: Props) => {
  console.log(solicitud);
  const router = useRouter();
  userIsLogged();
  const tipoSolicitudId = router.query.tipoSolicitudId;

  const handleAceptar = () => {
    axios
      .patch(
        `https://rackdat.onrender.com/Solicitudes/solicitud-verificar/${
          solicitud.folio
        }?verificacion=true&usuarioID=${getUserId()}`
      )
      .then((response) => {
        toast.success("Solicitud aprobada", {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push("/dashboard/solicitudes");
      })
      .catch((error) => {
        toast.success("Ocurrió un error", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleRechazar = () => {
    axios
      .patch(
        `https://rackdat.onrender.com/Solicitudes/solicitud-verificar/${
          solicitud.folio
        }?verificacion=false&usuarioID=${getUserId()}`
      )
      .then((response) => {
        toast.success("Solicitud rechazada", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          router.push("/dashboard/solicitudes");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.success("Ocurrió un error", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const getUserRole = (): number => {
    if (typeof window !== "undefined") {
      const userRoleString = localStorage.getItem("id_tipo_usuario");
      if (userRoleString) {
        const userRole = parseInt(userRoleString, 10);
        return userRole;
      }
    }
    return 0;
  };

  const getUserId = (): number => {
    if (typeof window !== "undefined") {
      const userJSON = localStorage.getItem("user");
      if (userJSON) {
        const user = JSON.parse(userJSON);
        if (user && user.id) {
          return user.id;
        }
      }
    }
    return 0;
  };

  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="w-[90%] flex flex-col m-auto">
        <div className=" m-auto mt-10 flex gap-2">
          <SolicitudUserColumn user={solicitud.usuario} />
          <SolicitudInfomationColumn
            id_tipo_solicitud={solicitud.id_tipo_solicitud}
            solicitud={solicitud}
          />
        </div>
        {getUserRole() === 7 ? (
          <div></div>
        ) : (
          <div className="mt-3 flex gap-2 self-end">
            <Btn style="strong" onClick={handleAceptar}>
              Acceptar
            </Btn>
            <Btn style="light" onClick={handleRechazar}>
              Rechazar
            </Btn>
          </div>
        )}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Index;

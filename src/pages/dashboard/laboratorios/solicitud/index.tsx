import React, { useEffect } from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import axios from "axios";
import { GetServerSideProps } from "next";
import LabCard from "@/components/dashboard/laboratorios/LabCard";
import Laboratory from "@/assets/interfaces/laboratory";
import ColumnaLaboratorios from "@/components/dashboard/laboratorios/solicitud/ColumnaLaboratorios";
import ColumnaTimePicker from "@/components/dashboard/laboratorios/solicitud/ColumnaTimePicker";
import ColumnaDayPicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDayPicker";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { userIsLogged } from "@/assets/middlewares/authUser";

export const getServerSideProps: GetServerSideProps = async () => {
  const laboratories = await axios
    .get("https://rackdat.onrender.com/Laboratorios/labs")
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      laboratories: laboratories,
    }, // will be passed to the page component as props
  };
};

type Props = { laboratories: Laboratory[] };
const Index = ({ laboratories }: Props) => {
  const router = useRouter();
  userIsLogged();
  const [date, setDate] = useState<Date>(new Date());
  const [idLaboratory, setIDLaboratory] = useState<number>(
    Number(router.query.selectedLab)
  ); // [0

  const getUserId = (): number => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      if (user && user.id) {
        return user.id;
      }
    }
    return 0;
  };

  const getDates = (time: string): string => {
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate();

    const pacificDateTimeFormat = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const pacificSelectedDate = pacificDateTimeFormat.format(date);

    const [timeHours, timeMinutes] = time.split(":").map(Number);
    const pacifictimeDate = new Date(pacificSelectedDate);
    pacifictimeDate.setHours(Number(timeHours), Number(timeMinutes));

    const timeFormatted = pacifictimeDate.toISOString();
    console.log(timeFormatted);
    return timeFormatted;
  };

  const handleSolicitar = (
    horaInicio: string,
    horaEntrega: string,
    cantidadPersonas: string,
    justificacion: string
  ) => {
    console.log(
      idLaboratory,
      horaInicio,
      horaEntrega,
      cantidadPersonas,
      getUserId(),
      justificacion
    );
    axios
      .post("https://rackdat.onrender.com/Solicitudes/solicitud/lab", {
        lab: idLaboratory,
        inicio: getDates(horaInicio),
        final: getDates(horaEntrega),
        cantidad_personas: cantidadPersonas,
        usuario: getUserId(),
        comentario: justificacion,
      })
      .then((response) => {
        console.log("Solicitud enviada correctamente");
        console.log("Respuesta:", response.data);
        toast.success("Solicitud realizada con éxito", {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push(`/dashboard/solicitudes/${response.data.id_solicitud}`);
      })
      // .then(() => {
      //   router.push(`/dashboard/solicitudes/${response.data.id_solicitud}`)
      // })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
        toast.error("Se ha producido un error, revisa los campos", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    // router.push("/dashboard/solicitudes");
  };

  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="w-[90%] m-auto flex mt-10 justify-between h-[75vh] items-center max-h-[600px]">
        <ColumnaLaboratorios
          laboratories={laboratories}
          idSelectedLaboratory={idLaboratory}
          setSelectedIdLaboratory={(id) => setIDLaboratory(id)}
        />
        <ColumnaDayPicker daySelected={date} setDaySelected={setDate} />
        <ColumnaTimePicker handleSolicitar={handleSolicitar} />
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Index;

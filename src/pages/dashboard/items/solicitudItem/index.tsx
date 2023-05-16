import React, { useEffect } from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSideProps } from "next/types";
import axios from "axios";
import ItemsColumns from "@/components/dashboard/items/solicitudItem/ItemsColumns";
import Item from "@/assets/interfaces/item";
import ColumnaDayPicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDayPicker";
import JustificationColumn from "@/components/dashboard/items/solicitudItem/JustificationColumn";
import { toast } from "react-toastify";
import { userIsLogged } from "@/assets/middlewares/authUser";
import { format, parseISO } from "date-fns";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const itemIds = ctx.query.selectedItems
    ? String(ctx.query.selectedItems)
        .split(",")
        .map((item) => Number(item))
    : [];

  const itemsPromises = await itemIds.map(async (id) => {
    const cosa = await axios
      .get(`https://rackdat.onrender.com/Equipos/equipo/${id}`)
      .then((res) => res.data);
    return cosa;
  });

  const items = await Promise.all(itemsPromises);

  return {
    props: {
      items: items,
    },
  };
};

type Props = {
  items: Item[];
};

const Index = ({ items }: Props) => {
  userIsLogged();
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [justification, setJustification] = useState<string>("");
  const router = useRouter();

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

  const dateToString = (date: Date): string => {
    return date.toISOString();
  };

  const convertDateFormatStart = (date: Date): string => {
    const dateString = dateToString(date);
    const dateTemp = parseISO(dateString);
    const formattedDate = format(dateTemp, "yyyy-MM-dd") + "T00:00:00.000Z";
    return formattedDate;
  };

  const convertDateFormatEnd = (date: Date): string => {
    const dateString = dateToString(date);
    const dateTemp = parseISO(dateString);
    const formattedDate = format(dateTemp, "yyyy-MM-dd") + "T23:59:59.000Z";
    return formattedDate;
  };

  const handleSolicitar = () => {
    const equipos = items.map(({ id }) => id);
    const dateSalida = new Date(convertDateFormatStart(selectedDay));
    const dateVuelta = new Date(convertDateFormatEnd(selectedDay));
    axios
      .post(`https://rackdat.onrender.com/Solicitudes/solicitud/equipo`, {
        equipos: equipos,
        salida: dateSalida,
        vuelta: dateVuelta,
        usuario: getUserId(),
        comentario: justification,
      })
      .then((response) => {
        console.log("Respuesta:", response.data);
        toast.success("Solicitud realizada con éxito", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          router.push("/dashboard/solicitudes");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
        toast.error("Se ha producido un error, revisa los campos", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <Layout>
      <LayoutHeader title="Equipos" />
      <div className="w-[90%] m-auto mt-10 h-[75vh] max-h-[600px] flex gap-2">
        <ItemsColumns items={items} />
        <ColumnaDayPicker
          daySelected={selectedDay}
          setDaySelected={setSelectedDay}
        />

        <JustificationColumn
          handleSolicitar={handleSolicitar}
          justification={justification}
          setJustification={setJustification}
          day={selectedDay}
        />
      </div>
    </Layout>
  );
};

export default Index;

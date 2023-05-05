import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import axios from "axios";
import { GetServerSideProps } from "next";
import LabCard from "@/components/dashboard/laboratorios/LabCard";
import Laboratory from "@/assets/interfaces/laboratory";
import ColumnaLaboratorios from "@/components/dashboard/laboratorios/solicitud/ColumnaLaboratorios";
import ColumnaDateTimePicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDateTimePicker";
import { Eventcalendar } from "@mobiscroll/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const laboratories = await axios
    .get("https://rackdat.onrender.com/api/RackDAT/labs")
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

const index = ({ laboratories }: Props) => {
  console.log(laboratories);
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="w-[90%] m-auto flex mt-10 justify-between h-[75vh]">
        <ColumnaLaboratorios laboratories={laboratories} />
        <input
          type="date"
          className="p-2 rounded-lg border-2 w-5 h-2"
          autoFocus
        />
        {/* <Eventcalendar
          data={[
            {
              start: new Date(),
              title: "Today's event",
            },
          ]}
          className="h-1/2"
        /> */}
        <ColumnaDateTimePicker />
      </div>
    </Layout>
  );
};

export default index;

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
      <div className="w-[90%] m-auto flex mt-10 justify-between">
        <ColumnaLaboratorios laboratories={laboratories} />
        <Eventcalendar
          data={[
            {
              start: new Date(),
              title: "Today's event",
            },
            {
              start: new Date(2020, 11, 18, 9, 0),
              end: new Date(2020, 11, 20, 13, 0),
              title: "Multi day event",
            },
          ]}
        />
        <ColumnaDateTimePicker />
      </div>
    </Layout>
  );
};

export default index;

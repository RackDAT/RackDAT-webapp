import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import axios from "axios";
import { GetServerSideProps } from "next";
import LabCard from "@/components/dashboard/laboratorios/LabCard";
import Laboratory from "@/assets/interfaces/laboratory";
import ColumnaLaboratorios from "@/components/dashboard/laboratorios/solicitud/ColumnaLaboratorios";
import ColumnaDateTimePicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDateTimePicker";
import ColumnaDayPicker from "@/components/dashboard/laboratorios/solicitud/ColumnaDayPicker";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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
  const [date, setDate] = useState<Date>(new Date());

  const handleSolicitar = () => {
    toast.success("Deafault Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="w-[90%] m-auto flex mt-10 justify-between h-[75vh] items-center max-h-[600px]">
        <ColumnaLaboratorios laboratories={laboratories} />
        <ColumnaDayPicker daySelected={date} setDatSelected={setDate} />
        <ColumnaDateTimePicker handleSolicitar={handleSolicitar} />
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default index;

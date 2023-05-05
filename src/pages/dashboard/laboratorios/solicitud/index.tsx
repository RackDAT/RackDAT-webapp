import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import axios from "axios";
import { GetServerSideProps } from "next";
import LabCard from "@/components/dashboard/laboratorios/LabCard";
import Laboratory from "@/assets/interfaces/laboratory";
import ColumnaLaboratorios from "@/components/dashboard/laboratorios/solicitud/ColumnaLaboratorios";

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
      <div className="w-[90%] m-auto flex mt-10">
        <ColumnaLaboratorios laboratories={laboratories} />
      </div>
    </Layout>
  );
};

export default index;

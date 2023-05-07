import React, { useEffect } from "react";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import LabCard from "@/components/dashboard/laboratorios/LabCard";
import { GetServerSideProps } from "next";
import Laboratory from "@/assets/interfaces/laboratory";
import axios from "axios";

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

type Props = {
  laboratories: Laboratory[];
};

const index = ({ laboratories }: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="mt-4 w-[95%] m-auto">
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-slate-700">
            Laboratorios disponibles actualmente en el DAT
          </label>
          <label className="text-slate-400 text-md">
            CETYS Universidad Campus Ensenada
          </label>
        </div>
        <div className="flex py-6 gap-4 justify-left flex-wrap">
          {laboratories.map((laboratory, index) => {
            return <LabCard key={index} laboratory={laboratory} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default index;

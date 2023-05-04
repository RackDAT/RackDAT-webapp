import React from "react";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import LabCard from "@/components/dashboard/laboratorios/LabCard";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="mt-4 w-[95%] m-auto">
        <div>
          <label className="text-sm text-slate-700">
            Laboratorios disponibles actualmente en el DAT
          </label>
        </div>
        <div className="flex py-6 gap-4 justify-left flex-wrap">
          <LabCard />
          <LabCard />
          <LabCard />
          <LabCard />
          <LabCard />
        </div>
      </div>
    </Layout>
  );
};

export default index;

import React from "react";
import Layout from "../Layout";
import LayoutHeader from "../LayoutHeader";
import LabCard from "./LabCard";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="w-[85%] m-auto flex py-6 gap-4 justify-center flex-wrap">
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
      </div>
    </Layout>
  );
};

export default index;

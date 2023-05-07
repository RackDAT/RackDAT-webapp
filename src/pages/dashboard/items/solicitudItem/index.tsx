import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Items" />
      <div className="w-[90%] m-auto border-2">
        <div>
          <h1 className="text-lg">Items</h1>
          <div className=" rounded-lg p-4">
            <span>Aqui van los items</span>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default index;

"use client";

import React from "react";
import AnadirForm from "@/components/dashboard/anadir-item-reactivo/AnadirForm";
import { MdAddShoppingCart } from "react-icons/md";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";

type Props = {};

const page = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Añadir Item" />
      <div className="flex flex-col">
        <AnadirForm />
      </div>
    </Layout>
  );
};

export default page;

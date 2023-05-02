"use client";

import React from "react";
import AnadirForm from "./AnadirForm";
import { MdAddShoppingCart } from "react-icons/md";
import Layout from "../Layout";
import LayoutHeader from "../LayoutHeader";

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

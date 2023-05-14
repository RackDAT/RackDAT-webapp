"use client";

import React from "react";
import AnadirForm from "@/components/dashboard/anadir-item-reactivo/AnadirForm";
import { MdAddShoppingCart } from "react-icons/md";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { useRouter } from "next/router";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const validateUserRole = () => {
    const userRole = localStorage.getItem("tipo_usuario");
    if (userRole === null || parseInt(userRole) === 7) {
      router.push("/403");
    }
  };

  validateUserRole();
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

import React from "react";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import Layout from "../../../components/dashboard/Layout";
import SearchBar from "@/components/dashboard/items/SearchBar";
import Filter from "../../../components/dashboard/items/Filter";
import ItemTable from "../../../components/dashboard/items/ItemTable";
import Btn from "@/components/global/Btn";
import { BiBook } from "react-icons/bi";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

type Props = {
  equipos: any;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const equipos = await axios
    .get("https://rackdat.onrender.com/api/RackDAT/equipos")
    .then((res) => res.data);

  return {
    props: {
      equipos: equipos,
    },
  };
};

const items = ({ equipos }: Props) => {
  const router = useRouter();

  const [selectedRows, setSelectedRows] = useState<Number[]>([]);

  return (
    <Layout>
      <LayoutHeader title="Items" />
      <div className="m-auto w-[90%] flex flex-col">
        <SearchBar />

        {/* filters */}
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <Filter>
              <option>Tipo de Item</option>
            </Filter>
            <Filter>
              <option>Disponible</option>
              <option>No disponible</option>
            </Filter>
            <Filter>
              <option>Carrera</option>
              <option>Isw</option>
              <option>Lic</option>
            </Filter>
          </div>
        </div>

        {/* table */}
        <div className="my-2">
          <ItemTable
            equipos={equipos}
            setSelectedRows={(ids: number[]) => setSelectedRows(ids)}
          />
        </div>
        <div className="self-end">
          <Btn
            style="strong"
            onClick={() => {
              const urlParams = new URLSearchParams(window.location.search);
              urlParams.set("selectedItems", selectedRows.toString());
              router.push(
                "/dashboard/items/solicitudItem?" + urlParams.toString()
              );
            }}
          >
            <div className="flex gap-2 items-center text-sm">
              <BiBook className="w-4 h-4" />
              Solicitar
            </div>
          </Btn>
        </div>
      </div>
    </Layout>
  );
};

export default items;

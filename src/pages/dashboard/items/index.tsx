import React from "react";
import LayoutHeader from "../LayoutHeader";
import Layout from "../Layout";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ItemTable from "./ItemTable";
import Btn from "@/components/global/Btn";
import { BiBook } from "react-icons/bi";

type Props = {};

const items = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Items" />
      <div className="m-auto w-[90%]">
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
          <Btn style="strong">
            <div className="flex gap-2 items-center text-sm">
              <BiBook className="w-4 h-4" />
              Solicitar
            </div>
          </Btn>
        </div>

        {/* table */}
        <div className="my-2">
          <ItemTable />
        </div>
      </div>
    </Layout>
  );
};

export default items;

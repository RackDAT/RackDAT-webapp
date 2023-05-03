import React from "react";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import Layout from "../../../components/dashboard/Layout";
import SearchBar from "@/components/dashboard/items/SearchBar";
import Filter from "../../../components/dashboard/items/Filter";
import ItemTable from "../../../components/dashboard/items/ItemTable";

type Props = {};

const items = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Items" />
      <div className="m-auto w-[90%]">
        <SearchBar />

        {/* filters */}
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

        {/* table */}
        <div className="my-2">
          <ItemTable />
        </div>
      </div>
    </Layout>
  );
};

export default items;

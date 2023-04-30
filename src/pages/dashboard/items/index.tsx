import React from "react";
import LayoutHeader from "../LayoutHeader";
import Layout from "../Layout";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ItemsTable from "./ItemsTable";

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
        <div className="my-2"></div>
      </div>
    </Layout>
  );
};

export default items;

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
import axios, { all } from "axios";
import { useState } from "react";
import Item from "@/assets/interfaces/item";
import { userIsLogged } from "@/assets/middlewares/authUser";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const equipos = await axios
    .get("https://rackdat.onrender.com/Equipos/equipos")
    .then((res) => res.data);

  return {
    props: {
      allEquipos: equipos,
    },
  };
};

type Props = {
  allEquipos: Item[];
};

const Index = ({ allEquipos }: Props) => {
  const router = useRouter();
  userIsLogged();
  const [selectedRows, setSelectedRows] = useState<Number[]>([]);
  const [equipos, setEquipos] = useState<Item[]>(allEquipos);

  const filterItems = (searchBarString: string) => {
    if (searchBarString === "") {
      setEquipos(allEquipos);
    }
    const filteredItems = allEquipos.filter((item: Item) => {
      return item.descripcion
        .toLowerCase()
        .includes(searchBarString.toLowerCase());
    });
    setEquipos(filteredItems);
  };

  return (
    <Layout>
      <LayoutHeader title="Equipos" />
      <div className="m-auto w-[90%] flex flex-col">
        <SearchBar filterItems={filterItems} />

        {/* filters */}
        {/* <div className="flex justify-between w-full">
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
        </div> */}

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
            disabled={selectedRows.length === 0}
          >
            <div className="flex gap-2 items-center text-sm">
              {selectedRows.length === 0 ? (
                "Selecciona un Item"
              ) : (
                <>
                  <BiBook className="w-4 h-4" />
                  Solicitar
                  <label className="font-bold">
                    {selectedRows.length ? selectedRows.length : ""}
                  </label>
                  {selectedRows.length === 1 ? " item" : " items"}
                </>
              )}
            </div>
          </Btn>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

import React from "react";
import Item from "@/assets/interfaces/item";
import Image from "next/image";

type Props = {
  items: Item[];
};

const ItemsColumns = ({ items }: Props) => {
  return (
    <div className="rounded-lg shadow w-1/3 bg-white h-full">
      <div className="w-full border-b-2 p-2 font-semibold text-slate-600">
        <h1>Equipos Seleccionados</h1>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {items.map((item) => {
          return <EquipoDiv item={item} />;
        })}
      </div>
    </div>
  );
};

type EquipoDivProps = {
  item: Item;
};
const EquipoDiv = ({ item }: EquipoDivProps) => {
  return (
    <div className=" border-2 flex rounded-lg overflow-hidden">
      <Image src={item.imagen} alt={"imagen item"} width={100} height={100} />
      <div className="p-2">
        <label>{item.descripcion}</label>
      </div>
    </div>
  );
};

export default ItemsColumns;

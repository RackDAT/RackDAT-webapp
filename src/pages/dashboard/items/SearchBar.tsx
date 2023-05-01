import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-full rounded shadow-xl flex bg-white my-2 items-center gap-2 text-sm">
      <div className="p-[8px] border-r-[1px] border-slate-100">
        <FiSearch className="w-6 h-6 text-slate-300" />
      </div>
      <input
        placeholder="Busca lo que quieras"
        className="w-full border-none outline-none font-light"
      />
    </div>
  );
};

export default SearchBar;

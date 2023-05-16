import { time } from "console";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
  filterItems: (searchBarString: string) => void;
  placeholder?: string;
};

const SearchBar = (props: Props) => {
  const [filterString, setFilterString] = useState<string>("");

  // const debounce = (func: () => {}, wait: number = 1000) => {
  //   let timeout: any;
  //   return (...args: any) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func(...args), wait);
  //   };
  // };

  // const handleDebounce = debounce((text) => {
  //   setFilterString(text);
  //   props.filterItems();
  // });

  return (
    <div className="w-full rounded shadow-xl flex bg-white my-2 items-center gap-2 text-sm">
      <div className="p-[8px] border-r-[1px] border-slate-100">
        <FiSearch className="w-6 h-6 text-slate-300" />
      </div>
      <input
        placeholder={
          props.placeholder ? props.placeholder : "Busca lo que quieras "
        }
        className="w-full border-none outline-none font-light"
        value={filterString}
        onChange={(e) => {
          setFilterString(e.target.value);
          props.filterItems(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;

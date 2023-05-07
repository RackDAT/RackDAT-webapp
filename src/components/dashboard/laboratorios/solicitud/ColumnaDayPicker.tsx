import React from "react";
import { DayPicker } from "react-day-picker";

type Props = { daySelected: Date; setDatSelected: (day: Date) => void };

//se tiene que definir los estilos de esta manera ya que es una libreria y no se pueden modificar los estilos con tailwind
const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    background-color: #ffd000;
    color:white;
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: rgb(251 146 60);
  }
  .my-root{
    width:100%;
    border:1px solid black;
    background-color: #ffd000;
  }
  .my-buton{
    display:none;
  }
`;

const ColumnaDayPicker = ({ daySelected, setDatSelected }: Props) => {
  return (
    <div className=" w-1/3 h-full border-2 rounded-lg bg-slate-50 shadow-lg overflow-hidden flex justify-center items-center flex-col">
      <style>{css}</style>
      <DayPicker
        mode="single"
        onSelect={setDatSelected}
        selected={daySelected}
        captionLayout="dropdown-buttons"
        footer
        fromYear={2023}
        toYear={2024}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          fontSize: "1rem",
        }}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
          root: "my-root",
          buton: "my-buton",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
        }}
      />
      <div className="border-t-2 w-full h-[50%]">hello</div>
    </div>
  );
};

export default ColumnaDayPicker;

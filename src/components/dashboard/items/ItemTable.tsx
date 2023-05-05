import DataTable from "react-data-table-component";
import imagen from "./app.png";
import Image from "next/image";
import { useRouter } from "next/router";

const columns = [
  {
    name: "Imagen",
    selector: (row: any) => row.imagen,
  },
  {
    name: "Nombre",
    selector: (row: any) => row.nombre,
  },
  {
    name: "Modelo",
    selector: (row: any) => row.modelo,
  },
  {
    name: "Carrera",
    selector: (row: any) => row.carrera,
  },
  {
    name: "Año",
    selector: (row: any) => row.año,
  },
];

const data = [
  {
    id: 1,
    carrera: "ISW",
    imagen: (
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/rackdat-b06a8.appspot.com/o/ultimaPrueba?alt=media&token=d6abcc37-7135-4687-b2f5-8b8a848f5ca1"
        }
        className="w-16 h-16 object-cover rounded-lg"
        alt="hello"
        width={100}
        height={100}
      />
    ),
    nombre: "Catan",
    año: "1988",
    modelo: "Barocio",
  },
  {
    id: 2,
    imagen: (
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/rackdat-b06a8.appspot.com/o/ultimaPrueba?alt=media&token=d6abcc37-7135-4687-b2f5-8b8a848f5ca1"
        }
        className="w-16 h-16 object-cover rounded-lg"
        alt="hello"
        width={100}
        height={100}
      />
    ),
    carrera: "ISW",
    nombre: "Catan",
    año: "1988",
    modelo: "Barocio",
  },
  {
    id: 3,
    imagen: (
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/rackdat-b06a8.appspot.com/o/ultimaPrueba?alt=media&token=d6abcc37-7135-4687-b2f5-8b8a848f5ca1"
        }
        className="w-16 h-16 object-cover rounded-lg"
        alt="hello"
        width={100}
        height={100}
      />
    ),
    nombre: "Catan",
    año: "1988",
    carrera: "ISW",
    modelo: "Barocio",
  },
];

const customStyles = {
  headRow: {
    style: {
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    style: {
      padding: "10px 0",
    },
    highlightOnHoverStyle: {
      backgroundColor: "#f3f3f3",
      borderBottomColor: "#FFFFFF",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};
const ItemTable = () => {
  const router = useRouter();

  return (
    <DataTable
      columns={columns}
      data={data}
      fixedHeader
      fixedHeaderScrollHeight="400px"
      customStyles={customStyles}
      highlightOnHover
      pointerOnHover
      selectableRows
    />
  );
};

export default ItemTable;

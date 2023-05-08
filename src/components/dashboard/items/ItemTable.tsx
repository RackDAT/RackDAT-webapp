import DataTable from "react-data-table-component";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { set } from "nprogress";

const columns = [
  {
    name: "Imagen",
    selector: (row: any) => row.imagen,
  },
  {
    name: "Nombre",
    selector: (row: any) => row.descripcion,
  },
  {
    name: "Modelo",
    selector: (row: any) => row.modelo.modelo,
  },
  {
    name: "Fecha de adquisición",
    selector: (row: any) => row.fecha_compra,
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

type Props = { equipos: any; setSelectedRows: (ids: number[]) => void };

const ItemTable = ({ equipos, setSelectedRows }: Props) => {
  const router = useRouter();
  const [equiposRows, setEquiposRows] = useState([]);

  useEffect(() => {
    const rows = equipos.map((equipo: any) => {
      return {
        ...equipo,
        imagen: (
          <Image
            src={equipo.imagen}
            alt={equipo.descripcion}
            width={50}
            height={50}
          />
        ),
      };
    });
    setEquiposRows(rows);
  }, [equipos]);

  const handleChange = (state: any) => {
    setSelectedRows(state.selectedRows.map((row: any) => row.id));
  };

  return (
    <DataTable
      columns={columns}
      data={equiposRows}
      fixedHeader
      fixedHeaderScrollHeight="400px"
      customStyles={customStyles}
      onSelectedRowsChange={handleChange}
      highlightOnHover
      pointerOnHover
      selectableRows
    />
  );
};

export default ItemTable;

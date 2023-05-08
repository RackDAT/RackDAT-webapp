import Modelo from "./modelo";

export default interface Item {
  id: number;
  comentario: string;
  descripcion: string;
  fecha_compra: string;
  imagen: string;
  tag: string;
  num_serie: string;
  modelo: Modelo;
}

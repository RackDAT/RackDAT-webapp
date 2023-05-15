import TipoSolicitud from "./tipoSolicitud";
import Estatus from "./estatus";

export default interface ISolicitud {
  id: number;
  comentario: string;
  fecha_actualizacion: string;
  fecha_pedido: string;
  imagen_muestra: string;
  tipo_solicitud: TipoSolicitud;
  estatus: Estatus;
}

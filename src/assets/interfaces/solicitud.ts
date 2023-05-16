import TipoSolicitud from "./tipoSolicitud";
import Estatus from "./estatus";
import User from "./users";

export default interface ISolicitud {
  aprobacion_coordinador: boolean | null;
  aprobacion_tecnico: boolean | null;
  cantidad_equipos: number;
  comentario: string;
  estado_solicitud: {
    id: number;
    estatus_solicitud: string;
  };
  fecha_pedido: Date;
  folio: number;
  id_estatus_solicitud: number;
  id_tipo_solicitud: number;
  imagen: string;
  laboratorio_obtenido: string | null;
  tipo_solicitud: {
    id: number;
    tipo_solicitud: string;
  };
  usuario: User;
}

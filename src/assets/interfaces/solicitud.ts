import TipoSolicitud from "./tipoSolicitud";
import Estatus from "./estatus";
import User from "./users";

export default interface ISolicitud {
  aprobacion_coordinador: boolean | null;
  aprobacion_tecnico: boolean | null;
  cantidad_equipos: number;
  comentario: string;
  descripciones: string[];
  estatus_solicitud: {
    id: number;
    estatus_solicitud: string;
  };
  fecha_pedido: Date;
  fechas: Date[];
  folio: number;
  id_estatus_solicitud: number;
  id_tipo_solicitud: number;
  imagen: string;
  laboratorio_obtenido: string | null;
  modelos: string[];
  tipo_solicitud: {
    id: number;
    tipo_solicitud: "Laboratorio" | "Solicitudes" | "Equipo" | "Users";
  };
  usuario: User;
}

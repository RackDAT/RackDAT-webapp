export default interface User {
  id: number;
  nombre: string;
  apellido_pat: string;
  apellido_mat: string;
  correo: string;
  clave: string;
  verificado: boolean;
  id_tipo_usuario: number;
  tipo_usuario: {
    id: number;
    tipo_usuario: string;
  };
  id_carrera: number;
  carrera: {
    id: number;
    carrera: string;
    siglas: string;
  };
  imagen: string;
}

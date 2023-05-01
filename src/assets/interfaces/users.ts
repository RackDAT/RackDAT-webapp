export default interface User {
  id: number;
  nombre: string;
  apellido_pat: string;
  apellido_mat: string;
  correo: string;
  clave: string;
  verificado: boolean;
  tipo_usuario: {
    id: number;
    tipo_usuario: string;
  };
  carrera: {
    id: number;
    carrera: string;
    siglas: string;
  };
}

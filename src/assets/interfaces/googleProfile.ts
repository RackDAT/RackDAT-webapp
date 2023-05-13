// This one is used for get the information of the user by google
export default interface IProfile {
  email: string;
  family_name: string;
  given_name: string;
  hd: string | null;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
  id_tipo_usuario: number | null;
}

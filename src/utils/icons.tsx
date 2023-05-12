import { ImLab } from "react-icons/im";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const iconsForString = {
  Laboratorio: <ImLab className="w-5 h-5" />,
  Solicitudes: <AiOutlineUnorderedList className="w-5 h-5" />,
  Equipo: <MdInventory className="w-5 h-5" />,
  Users: <FaUserCircle className="w-5 h-5" />,
};
const getIconFromString = (
  string: "Laboratorio" | "Solicitudes" | "Equipo" | "Users"
) => {
  return iconsForString[string];
};

export default getIconFromString;

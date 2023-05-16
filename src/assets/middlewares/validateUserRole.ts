import { useRouter } from "next/router";

export const validateUserRole = () => {
  if (typeof window !== "undefined") {
    const userRole = localStorage.getItem("id_tipo_usuario");
    if (userRole === null || parseInt(userRole) === 7) {
      return false;
    }
  }
  return true;
};

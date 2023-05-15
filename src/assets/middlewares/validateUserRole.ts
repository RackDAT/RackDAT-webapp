import { useRouter } from "next/router";

export const validateUserRole = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const userRole = localStorage.getItem("id_tipo_usuario");
    if (userRole === null || parseInt(userRole) === 7) {
      router.push("/403");
    }
  }
};

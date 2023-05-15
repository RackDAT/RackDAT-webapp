import { useRouter } from "next/router";

export const userIsLogged = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const userRole = localStorage.getItem("id_tipo_usuario");
    if (userRole === null) {
      router.push("/401");
    }
  }
};

export const userLogged = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("user");
    if (userInfo != null) {
      router.push("/dashboard/home");
    }
  }
};

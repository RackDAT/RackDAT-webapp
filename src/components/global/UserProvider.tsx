import React from "react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import IProfile from "@/assets/interfaces/googleProfile";

type Props = { children: React.ReactNode };

const UserContext = React.createContext<any | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return <>{children}</>;
};

export default UserProvider;

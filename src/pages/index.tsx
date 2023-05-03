import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Btn from "@/components/global/Btn";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <div className="w-full h-screen">
      {/* <div className="m-auto w-fit">
        <Btn style="strong">
          <a href="/api/auth/login">LogIn</a>
        </Btn>
      </div>
      {user && (
        <>
          <h1>hay usuario senores</h1>
          <a href="/api/auth/logout" className="text-white">
            logout
          </a>
        </>
      )} */}
    </div>
  );
}

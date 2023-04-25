import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Btn from "@/components/global/Btn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="m-auto w-fit">
        <Btn style="strong">
          <a href="/api/auth/login">LogIn</a>
        </Btn>

        <Btn style="light">SignUp</Btn>
      </div>
    </div>
  );
}

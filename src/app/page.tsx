import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Btn from "@/components/global/Btn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="m-auto w-fit">
        <h1 className="text-3xl uppercase text-white">RackDat home page</h1>
        <Btn>hello</Btn>
      </div>
    </div>
  );
}

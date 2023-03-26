import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="m-auto w-fit">
        <h1 className="text-3xl uppercase">RackDat home page</h1>
      </div>
    </div>
  );
}

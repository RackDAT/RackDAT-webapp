import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Btn from "@/components/global/Btn";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="w-full h-screen"></div>;
}

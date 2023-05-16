import React from "react";
import Layout from "../../../../components/dashboard/Layout";
import LayoutHeader from "../../../../components/dashboard/LayoutHeader";
import Image from "next/image";
import img from "@/assets/img/lab.jpg";
import Btn from "@/components/global/Btn";
import axios from "axios";
import { GetServerSideProps } from "next";
import laboratory from "@/assets/interfaces/laboratory";
import { useRouter } from "next/navigation";
import { userIsLogged } from "@/assets/middlewares/authUser";
import https from "https";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return { props: { laboratory: null } };
  }
  const laboratory = await axios
    .get(
      `https://rackdat.onrender.com/Laboratorios/lab/${context.params.idLab}`
    )
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      laboratory: laboratory,
    }, // will be passed to the page component as props
  };
};

type Props = { laboratory: laboratory };

const Laboratory = ({ laboratory }: Props) => {
  console.log(laboratory);
  const router = useRouter();
  userIsLogged();
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="flex w-5/6 flex-col m-auto">
        <div className="flex w-full justify-center gap-6 mt-6">
          <div className="w-1/2">
            <Image
              src={laboratory.imagen}
              alt="laboratorio"
              width={1000}
              height={1000}
              className=" w-full h-[300px] object-cover m-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col py-2 max-w-lg w-1/2 h-[300px] justify-between">
            <div>
              <h3 className="font-thin text-slate-400 text-sm">
                Cetys campus Ensenada
              </h3>
              <h1 className="text-xl uppercase">
                Laboratorio{" "}
                <span className="font-bold text-orange-400">
                  {laboratory.laboratorio}
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <span>Capacidad: 30 personas</span>
              </div>
              <p className="text-sm text-slate-500">
                {laboratory.descripcion_lab}
              </p>
            </div>

            <div className="">
              <Btn
                style="strong"
                onClick={() => {
                  const urlParams = new URLSearchParams(window.location.search);
                  urlParams.set("selectedLab", laboratory.id.toString());
                  urlParams.toString();
                  router.push(
                    "/dashboard/laboratorios/solicitud?" + urlParams.toString()
                  );
                }}
              >
                Reservar Ahora
              </Btn>
            </div>
          </div>
        </div>
        <hr className="mt-6" />
      </div>
    </Layout>
  );
};

export default Laboratory;

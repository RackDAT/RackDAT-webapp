import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import SignUpForm from "@/components/sign-up/signUpForm";
import { useRouter } from "next/router";
import INewProfile from "@/assets/interfaces/newProfile";
import { GetServerSideProps } from "next";
import ICareer from "@/assets/interfaces/career";
import axios from "axios";
type Props = {
  careers: ICareer[];
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get<ICareer[]>(
      "https://rackdat.onrender.com/api/RackDAT/carreras"
    );
    const careers = response.data;

    return {
      props: {
        careers: careers,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        careers: [],
      },
    };
  }
};

const page = ({ careers }: Props) => {
  const router = useRouter();
  const props = router.query;

  const hola = () => {
    console.log(props);
  };

  hola();

  const userProfile: INewProfile = {
    nombre: props.nombre,
    apellido: props.apellido_pat,
    correo: props.correo,
    imagen: props.imagen,
  };

  return (
    <div className="h-screen w-screen flex">
      <ContentTemplate>
        <div className="w-full h-full">
          <SignUpForm profile={userProfile} careers={careers} />
        </div>
      </ContentTemplate>
    </div>
  );
};

export default page;

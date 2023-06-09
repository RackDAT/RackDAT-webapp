import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import SignUpForm from "@/components/sign-up/signUpForm";
import { useRouter } from "next/router";
import INewProfile from "@/assets/interfaces/newProfile";
import { GetServerSideProps } from "next";
import ICareer from "@/assets/interfaces/career";
import axios from "axios";
import { userLogged } from "@/assets/middlewares/authUser";

type Props = {
  careers: ICareer[];
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get<ICareer[]>(
      "https://rackdat.onrender.com/Carreras/carreras"
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
  // userLogged();
  const props = router.query;

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

import React, { useEffect, useState } from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import SignUpForm from "@/components/sign-up/signUpForm";
import IProfile from "@/assets/interfaces/googleProfile";
import { useRouter } from "next/router";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Btn from "@/components/global/Btn";
import { userLogged } from "@/assets/middlewares/authUser";

type Props = {};

const page = (props: Props) => {
  userLogged();
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const getUserInfo = async (email: string): Promise<any> => {
    try {
      const response = await axios.post(
        "https://rackdat.onrender.com/Usuarios/usuario/correo",
        {
          correo: email,
        }
      );
      if (response) {
        const data = response.data;
        try {
          const responseForId = await axios.get(
            `https://rackdat.onrender.com/Usuarios/usuario/${data.id}`
          );
          return responseForId.data;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleVerified = (response: any) => {
    if (response) {
      if (response.verificado === true) {
        router.push({
          pathname: "/dashboard/home",
        });
      } else {
        router.push({
          pathname: "/wait",
        });
      }
    } else {
      handleNewUser();
    }
  };

  const handleNewUser = () => {
    const props = {
      nombre: profile?.given_name,
      apellido_pat: profile?.family_name,
      correo: profile?.email,
      imagen: profile?.picture,
    };

    router.push({
      pathname: "/sign-up",
      query: props,
    });
  };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          await setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (profile) {
        const userIsVerified = await getUserInfo(profile.email);
        console.log(userIsVerified);
        localStorage.setItem("user", JSON.stringify(userIsVerified));
        console.log(userIsVerified);
        localStorage.setItem(
          "id_tipo_usuario",
          JSON.stringify(userIsVerified.id_tipo_usuario)
        );
        handleVerified(userIsVerified);
      }
    };

    fetchData();
  }, [profile]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="h-screen w-screen flex">
      <ContentTemplate>
        <div className="w-full h-full ml-20 flex flex-col gap-5 justify-center items-center">
          {profile ? (
            <label htmlFor="">Loading...</label>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-xl font-bold">Bienvenido a RackDAT</span>
              <Btn style="strong" onClick={() => login()}>
                Sign in with Google 🚀{" "}
              </Btn>
            </div>
          )}
        </div>
      </ContentTemplate>
    </div>
  );
};

export default page;

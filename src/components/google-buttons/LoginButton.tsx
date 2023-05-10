import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import IProfile from "@/assets/interfaces/googleProfile";
import { useRouter } from "next/router";
import Btn from "../global/Btn";

const LoginButton = () => {
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
        "https://rackdat.onrender.com/api/RackDAT/usuario/correo",
        {
          correo: email,
        }
      );
      if (response) {
        const data = response.data;
        try {
          const responseForId = await axios.get(
            `https://rackdat.onrender.com/api/RackDAT/usuario/id:int?id=${data.id}`
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
    <div>
      <br />
      <br />
      {profile ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <Btn style="strong" onClick={() => login()}>
          Sign in with Google 🚀{" "}
        </Btn>
      )}
    </div>
  );
};

export default LoginButton;

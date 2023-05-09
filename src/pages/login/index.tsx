import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import SignUpForm from "@/components/sign-up/signUpForm";
import LoginButton from "@/components/google-buttons/LoginButton";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen w-screen flex">
      <ContentTemplate>
        <div className="w-full h-full ml-20 flex flex-col gap-5 justify-center items-center">
          <div className="w-full h-full">
            <span className="text-xl font-bold">Bienvenido a RackDAT</span>
            <LoginButton />
          </div>
        </div>
      </ContentTemplate>
    </div>
  );
};

export default page;

import React from "react";
import Background from "@/components/global/Background";
import LoginForm from "./LoginForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen w-screen">
      <Background>
        <LoginForm>hello</LoginForm>
      </Background>
    </div>
  );
};

export default page;

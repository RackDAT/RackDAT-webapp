import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import LoginForm from "./LoginForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen w-screen flex">
      <ContentTemplate>
        <div className="w-full h-full">
          <LoginForm />
        </div>
      </ContentTemplate>
    </div>
  );
};

export default page;

import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import SignUpForm from "@/components/sign-up/signUpForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen w-screen flex">
      <ContentTemplate>
        <div className="w-full h-full">
          <SignUpForm />
        </div>
      </ContentTemplate>
    </div>
  );
};

export default page;

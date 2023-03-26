import ContentTemplate from "@/components/global/ContentTemplate";
import React from "react";
ContentTemplate;

type Props = {
  children: React.ReactNode;
};

const LoginForm = (props: Props) => {
  return (
    <ContentTemplate>
      <div className="w-full h-full">
        <h1>form</h1>
      </div>
    </ContentTemplate>
  );
};

export default LoginForm;

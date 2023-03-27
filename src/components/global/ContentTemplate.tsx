import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentTemplate = (props: Props) => {
  return (
    <div className="w-[90%] h-[90%] max-h-[700px] m-auto bg-[#F5F5F5] rounded-md flex justify-between overflow-hidden">
      <div className="w-1/2">{props.children}</div>
      <div className="w-1/2 bg-[#E1E5F0]"></div>
    </div>
  );
};

export default ContentTemplate;

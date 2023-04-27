import React from "react";
import { uploadPhoto } from "@/components/functions/firebase";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <button onClick={() => console.log("hello")}>Upload Photo</button>
      <input
        type="file"
        className="w-[500px] h-[500px]"
        onChange={(e) => {
          const file = e.target.files;
          if (file) {
            uploadPhoto(file[0]);
          }
        }}
      />
    </div>
  );
};

export default index;

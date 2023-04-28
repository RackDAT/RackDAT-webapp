import React from "react";
import { uploadPhoto } from "@/components/functions/firebase";
import { connectStorageEmulator } from "firebase/storage";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <input
        type="file"
        className="w-[500px] h-[500px]"
        onChange={(e) => {
          const file = e.target.files;
          console.log(file);
          if (file) {
            uploadPhoto(file[0], "ultimaPrueba");
          }
        }}
      />
    </div>
  );
};

export default index;

import { setFips } from "crypto";
import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

interface DropzoneProps {
  w: number | string;
  h: number | string;
  fileType: string;
}

const Dropzone = ({ w, h, fileType }: DropzoneProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [rejected, setRejected] = useState<FilesRejected[]>([]);

  interface FileWithPreview extends File {
    preview: string;
  }
  interface FilesRejected extends File {
    file: any;
    errors: Error[];
  }

  const handleImageLoad = (previewUrl: string) => () => {
    URL.revokeObjectURL(previewUrl);
  };

  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map(
          (file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }) as FileWithPreview
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      const filenames = rejectedFiles.map((file: any) => file.name).join(", ");
      Swal.fire({
        icon: "error",
        title: "Error al subir archivo",
        text: `El formato de algún archivo no es válido`,
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      [fileType]: [],
    },
  });

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <form>
      <div
        {...getRootProps({})}
        className={`flex flex-col items-center justify-center h-${h} w-${w} text-sm border text-zinc-500 border-[#B2C1D6] rounded bg-white p-8`}
      >
        <h1 className="title text-xl font-bold">Subir archivos</h1>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Arroja los archivos aquí</p>
        ) : (
          <p>
            Arrastra y arroja los archivos aquí, o da click para seleccionar
          </p>
        )}
      </div>
      <h3 className="title text-md font-semibold text-neutral-600 mt-2 border-b pb-1">
        Accepted Files
      </h3>
      <ul className="mt-1 flex flex-col">
        {files.map((file) => (
          <li key={file.name} className="flex items-start justify-between">
            <div>
              <p className="mt-2 text-neutral-500 text-sm font-medium">
                {file.name}
              </p>
            </div>
            <button
              type="button"
              className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
              onClick={() => removeFile(file.name)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Dropzone;

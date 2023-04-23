import { setFips } from "crypto";
import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import Image from "next/image";
import { RxCross2 } from 'react-icons/rx';

interface DropzoneProps {
    filetype: string;
};

const Dropzone = ({filetype}: DropzoneProps) => {
    const [files, setFiles] = useState<FileWithPreview[]>([])
    const [rejected, setRejected] = useState<FilesRejected[]>([])

    interface FileWithPreview extends File {
        preview: string;
    };
    interface FilesRejected extends File {
        file: any;
        errors: Error[]
    };

    const handleImageLoad = (previewUrl: string) => () => {
        URL.revokeObjectURL(previewUrl);
    };

    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map((file : any) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }) as FileWithPreview
                )
            ])
        };
        
        if (rejectedFiles?.length) {
            setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
        };
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {
        filetype: []
        }})
    const removeFile = (name: string) => {
        setFiles(files => files.filter(file => file.name !== name))
    };

    const removeRejected = (name: string) => {
        setRejected(files => files.filter(({ file }) => file.name !== name))
      }

    return (
        <form>
            <div {...getRootProps({})} className="text-sm border border-[#B2C1D6] rounded bg-white p-2">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Arroja los archivos aquí</p>
                ) : (
                    <p>Arrastra y arroja los archivos aquí, o da click para seleccionar</p>
                )} 
            </div>
            <h3 className='title text-md font-semibold text-neutral-600 mt-10 border-b pb-3'>
                Accepted Files
            </h3>
            <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                {files.map(file => (
                    <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
                        <Image 
                            src={file.preview}
                            alt={file.name}
                            width={100}
                            height={100}
                            onLoad={handleImageLoad(file.preview)}
                            className='h-full w-full object-contain rounded-md'
                        />
                        <button
                            type='button'
                            className='w-4 h-4 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                            onClick={() => removeFile(file.name)}
                        >
                            <RxCross2 className='w-5 h-5 fill-white hover:fill-secondary-400 transition-colors' />
                        </button>
                        <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                            {file.name}
                        </p>
                    </li>
                ))}
            </ul>
            <h3 className='title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3'>
          Rejected Files
        </h3>
        <ul className='mt-6 flex flex-col'>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className='flex items-start justify-between'>
              <div>
                <p className='mt-2 text-neutral-500 text-sm font-medium'>
                  {file.name}
                </p>
                <ul className='text-[12px] text-red-400'>
                  {errors.map((error: any) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type='button'
                className='mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors'
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
        </form>
    )
}

export default Dropzone;
import { setFips } from "crypto";
import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import Image from "next/image";
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';


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
            const filenames = rejectedFiles.map((file: any) => file.name).join(', ');
          
            Swal.fire({
              icon: 'error',
              title: 'Error al subir archivo',
              text: `Los siguientes archivos no pudieron ser subidos: ${filenames}`
            });
          }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {
        "image/*": []
    }});

    const removeFile = (name: string) => {
        setFiles(files => files.filter(file => file.name !== name))
    };

    return (
        <form>
            <div {...getRootProps({})} className="flex flex-col items-center justify-center h-40 text-sm border text-zinc-500 border-[#B2C1D6] rounded bg-white p-8">
                <h1 className='title text-xl font-bold'>Subir archivos</h1>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Arroja los archivos aquí</p>
                ) : (
                    <p>Arrastra y arroja los archivos aquí, o da click para seleccionar</p>
                )} 
            </div>
            <h3 className='title text-md font-semibold text-neutral-600 mt-2 border-b pb-1'>
                Accepted Files
            </h3>
            <ul className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1'>
                {files.map(file => (
                    <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
                        <Image 
                            src={file.preview}
                            alt={file.name}
                            width={100}
                            height={100}
                            onLoad={handleImageLoad(file.preview)}
                            className='h-auto w-full object-contain rounded-md bg-gray-300'
                        />
                        <button
                            type='button'
                            className='w-4 h-4 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                            onClick={() => removeFile(file.name)}
                        >
                            <RxCross2 className='w-5 h-5 fill-white hover:fill-secondary-400 transition-colors' />
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default Dropzone;
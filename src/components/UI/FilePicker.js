import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FilePicker = (props) => {
  const [file, setFile] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
    maxSize: 3000000,
  })

  useEffect(() => {
    URL.revokeObjectURL(file)
  }, [file])

  return (
    <section className='border border-gray-200 rounded-lg p-3 shadow-sm '>
      <div
        {...getRootProps()}
        className='text-sm text-gray-400 p-4 rounded-md border border-dashed border-gray-300 focus-within:border-indigo-400 text-center'
      >
        <input {...getInputProps()} />
        <p>
          Drag 'n' drop a file here, or click to select a file
          <br />
          note: max size of file is 3 MB
        </p>
      </div>
      <div className='mt-4'>
        {file.length > 0 && (
          <div className='rounded-md border border-gray-200 mb-2 aspect-w-1 aspect-h-1 overflow-hidden'>
            <img
              src={file[0].preview}
              alt={props.name}
              className='object-cover'
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default FilePicker

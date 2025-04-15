import React, { useState } from "react";
import { useRouter } from "next/router";

const Upload = ({isOpen, setIsOpen,header}: any) => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [text, setText] = useState("");
  const router = useRouter();
  
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleTextSubmit = async (e: any) => {
    e.preventDefault();

    if (uploadData && text) {
      if(header==="Browse by property type"){

        try {
          const data: any = await fetch(
            "http://localhost:3200/api/properties/add",
            {
              method: "POST",
              body: JSON.stringify({
                name: text,
                image: imageSrc,
              }),
            }
          );
          setImageSrc(undefined);
          setText("")
          refreshData();
        } catch (error) {
          console.log(error);
        }
      }else{
        try {
          const data: any = await fetch(
            "http://localhost:3200/api/destinations/add",
            {
              method: "POST",
              body: JSON.stringify({
                name: text,
                image: imageSrc,
              }),
            }
          );
          setImageSrc(undefined);
          setText("")
          refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("ensure you have uploaded image and typed text");
    }
  };

  const handleOnChange = (changeEvent: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: any) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dzoo0df0n/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">Upload Image</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none" title="close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <form action="" onSubmit={handleOnSubmit} onChange={handleOnChange} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition">
              <input 
                type="file" 
                name="file" 
                title="file" 
                className="w-full cursor-pointer"
              />
              <p className="text-sm text-gray-500 mt-2">Click to browse or drag and drop</p>
            </div>
            
            {imageSrc && (
              <div className="mt-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={imageSrc} alt="Preview" className="object-cover w-full h-full" />
                </div>
              </div>
            )}
            
            {imageSrc && !uploadData && (
              <div className="mt-4">
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Upload to Cloudinary
                </button>
              </div>
            )}
          </form>
        </div>
        
        {uploadData && (
          <form onSubmit={handleTextSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Destination Name
              </label>
              <input
                type="text"
                id="name"
                title="name"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter destination name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Save Destination
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Upload;
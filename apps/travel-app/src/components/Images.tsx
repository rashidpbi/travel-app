import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/router";

const Images = ({ images, header ,isOpen,setIsOpen}: any) => {
  
  console.log("header: ",header)
  const handleAddDestination =()=>{
    setIsOpen(true)
  }
   const router = useRouter();
    const refreshData = () => {
      router.replace(router.asPath);
    };
  const handleDelete = async(id:any)=>{
    if(header ==="Top Vacation Destinations"){
      try {
        await fetch(
          "http://localhost:3200/api/destinations/delete",
          {
            method: "DELETE",
            body: JSON.stringify({
              _id:id
            }),
          } 
        );
        refreshData()
      } catch (error) {
        console.log(error)
      }
    }else{
      try {
        await fetch(
          "http://localhost:3200/api/properties/delete",
          {
            method: "DELETE",
            body: JSON.stringify({
              _id:id
            }),
          } 
        );
        refreshData()
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  return (
    <div className="w-full  ">
      <div
        className={`text-2xl font-medium  flex justify-between  ${
          header === "Top Vacation Destinations"
            ? "text-black md:text-white"
            : ""
        } `}
      >
        {header}
        <div>
          <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={handleAddDestination}>
          <FaPlus size={15}/>
            Add Image
          </button>
        </div>
        
      </div>
      <div className="flex gap-10 overflow-x-scroll no-scrollbar mt-6  w-full  ">
        {images.map((image: any) => (
          <div
            key={image._id}
            className="relative  overflow-hidden rounded-lg shrink-0"
          >
            <div className="relative  w-80 h-44 overflow-hidden rounded-lg flex-shrink-0 group">
              <Image
                src={image.image}
                alt="image"
                className="absolute  w-full h-full object-cover"
                width={300}
                height={200}
                unoptimized={true}
              />
               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                
                <button className="p-2 bg-white rounded-full hover:bg-gray-100" title="edit">
                  <MdDeleteOutline size={20} className="text-red-600" onClick={()=>handleDelete(image._id)}/>
                </button>
              </div>
            
              <div className="absolute  text-white left-4 bottom-4 ">
                {image.name}
              </div>
              
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Images;

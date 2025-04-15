import React,{useState,useEffect} from "react";

import Mountains from "../components/Mountains.tsx";
import Home from "../components/Home.tsx";
import axios from "axios";
import { useRouter } from "next/router";
export const getStaticProps = async () => {
  try {
    const response = await axios.get("http://localhost:3200/api/mountains");
    const result = response.data;
    return { props: { result: result } };
  } catch (error) {}
};
const page = ({ result }) => {
  const [user,setUser] = useState(null)
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  const router = useRouter();
  useEffect(() => {
    
    const verifyUser = async()=>{
      try {
    const token = localStorage.getItem("token");
    if(!token){
      throw new Error("No token provided")
    }
    const response = await fetch('/api/verifyToken',{
      method:'GET',
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    const data = await response.json()
    if(response.ok){
      setUser(data.user)
    }else{
      throw new Error(data.message || 'token verification failed')
    }
  } catch (error) {
    router.push('/login')
  }
}
    verifyUser()
  }, []);
  if(!user){
    return <p>loading ...</p>
  }


  return (
    <div>
      <Home bgImg={"bg-mountains"}>
        <button onClick={handleLogout}>Logout</button>
        <Mountains data={result} />
      </Home>
    </div>
  );
};

export default page;

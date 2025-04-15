import React,{useState,useEffect} from "react";
import RootLayout from "./layout";
import Home from "../components/Home";
import Content from "../components/Content";
import axios from "axios";
import { useRouter } from "next/router";
export const getServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3200/api/home");
    const result = response.data;
    const destinationsResponse = await axios.get(
      "http://localhost:3200/api/destinations/get"
    );
    const destinationsResult = destinationsResponse.data;
    const propertiesResponse = await axios.get(
      "http://localhost:3200/api/properties/get"
    );
    const propertiesResult = propertiesResponse.data;

    return {
      props: { result: result, destinationsResult: destinationsResult , propertiesResult:propertiesResult},
    };
  } catch (error) {
    console.log(error);
    return { props: { result: null, destinationsResult: [], propertiesResult:[] } };
  }
};
export default function Page({ result, destinationsResult, propertiesResult }) {
  const router = useRouter();
  
  const [user,setUser] = useState(null)
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
      <Home bgImg={"bg-hero"}>
        <Content data={result} destinationsData={destinationsResult} propertiesData = {propertiesResult}/>
      </Home>
    </div>
  );
}
Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

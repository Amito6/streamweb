"use client"

import Layout from "../../cmp/Layout/Layout";
import useSWR from "swr";
import axios from "axios";
import Loader from "../../cmp/Loader/Loader";


const Page = () =>{
  const getData = async(api) =>{
    try {
      const response = await axios({
        method : "get",
        url : api
      });
      return response.data
    } catch (error) {
      throw error.response
    }
  }

  const {data,error} = useSWR("https://jsonplaceholder.typicode.com/posts",getData);
  if(!data && !error){
   return <Loader />
  }
  if(error)
  {
    return <h1>Error occurs</h1>
  }
  
  const design = (
    <>
    <Layout>
      <h1>First-App</h1>
    </Layout>
    </>
  );
  return design;
}

export default Page;
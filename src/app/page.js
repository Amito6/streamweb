"use client"

import { Button,Card,Navbar } from "../../Tailwind";



const Page = () =>{

  const menus = {
    brand : "Just for code",
    link : [
      {
        label : "Home",
        href : "/"
      },
      {
        label : "Home",
        href : "/"
      },
      {
        label : "Home",
        href : "/"
      },
      {
        label : "Home",
        href : "/"
      }
    ]
  }


  const design = (
    <>
      <Navbar 
      fullwidth = {true}
      variant = "three" 
      theme = "secondary"
      menu = {menus}
      fixed={true}/>
      <div style={{width:"100%",height:"5000px"}}></div>

    </>
  );
  return design;
}
export default Page;
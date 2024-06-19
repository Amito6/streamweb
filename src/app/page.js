"use client"

import { Button, Card, Navbar, Fade, Zoom, Expand, Flip} from "../../Tailwind";
import { useState } from "react";



const Page = () =>{
  const [show,setShow] = useState(true);
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
      />
      <Button 
      onClick={()=>{setShow(!show)}}
      theme="error" style={{marginTop:"20px"}}>Toggle</Button>
     <div className="w-4/12">
     <Flip state={show} className="bg-red-500 border w-full">
      <img src="Tshirt.jpg" className="w-full" alt="" />
      </Flip>
     </div>
      

    </>
  );
  return design;
}
export default Page;
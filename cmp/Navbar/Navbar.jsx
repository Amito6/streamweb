"use client"

import { 
    AppBar,
    Toolbar,
    Stack,
    Typography
 } from "@mui/material";

 import Link from "next/link";

import { usePathname } from "next/navigation";


const Navbar = () =>{

    const pathName = usePathname();
    console.log(pathName);

    const design = (
      <>
        <AppBar position="static">
            <Stack direction="row" justifyContent="space-between">
                <Toolbar>
                    <Typography variant="h4">Next-App</Typography>
                </Toolbar>
                <Stack direction="row">
                    <Toolbar>
                        <Link href="/" className={pathName === "/" ? "bg-danger p-3 px-3" : ""}>Home</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/courses"
                        className={pathName === "/courses" ? "bg-danger p-3 px-3" : ""}>Courses</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/blog"
                        className={pathName === "/blog" ? "bg-danger p-3 px-3" : ""}>Blog</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/login"
                         className={pathName === "/login" ? "bg-danger p-3 px-3" : ""}>Login</Link>
                    </Toolbar>
                </Stack>
            </Stack>
        </AppBar>
      </>
    );
    return design;
}
  
export default Navbar;
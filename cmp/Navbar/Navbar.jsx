import { 
    AppBar,
    Toolbar,
    Stack,
    Typography
 } from "@mui/material";

 import Link from "next/link";




const Navbar = () =>{
    const design = (
      <>
        <AppBar position="static">
            <Stack direction="row" justifyContent="space-between">
                <Toolbar>
                    <Typography variant="h4">Next-App</Typography>
                </Toolbar>
                <Stack direction="row">
                    <Toolbar>
                        <Link href="/">Home</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/courses">Courses</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/blog">Blog</Link>
                    </Toolbar>
                    <Toolbar>
                        <Link href="/login">Login</Link>
                    </Toolbar>
                </Stack>
            </Stack>
        </AppBar>
      </>
    );
    return design;
}
  
export default Navbar;
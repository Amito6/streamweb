"use client"

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { 
    createTheme,
    Paper,
    ThemeProvider
 } from "@mui/material";


const Layout = ({children}) =>{

    const theme = createTheme({
        palette : {
            mode : "dark"
        }
    });

    const design = (
        <>
            <ThemeProvider theme={theme}>
                <Paper sx={{minHeight : "100vh"}}>
                    <Navbar />
                    <h1 className="text-danger">Layout</h1>
                    {children}
                    <Footer />
                </Paper>
            </ThemeProvider>
        </>
    );
    return design;
}

export default Layout;
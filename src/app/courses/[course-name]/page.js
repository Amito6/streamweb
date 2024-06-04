"use client"
import Layout from "../../../../cmp/Layout/Layout";
import { usePathname } from "next/navigation";

const Page = () =>{
    const pathname = usePathname();
    const design = (
        <>
            <Layout>
            <h1>{pathname}</h1>
            <h1>I am syllabus</h1>
            </Layout>
        </>
    );
    return design;
}

export default Page;
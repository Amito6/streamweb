"use client"
import Layout from "../../../../cmp/Layout/Layout";
import { usePathname,useRouter,useSearchParams } from "next/navigation";

const Page = () =>{
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const desc = searchParams.get("desc");
    if(pathname === "/courses/test"){
        router.push("/not-found")
    }
    const design = (
        <>
            <Layout>
            <h1>{pathname}</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{desc}</h1>
            </Layout>
        </>
    );
    return design;
}

export default Page;
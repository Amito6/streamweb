import Link from "next/link";

const sample = {
    fixed : "fixed top-0 left-0 w-full",
    fixedWidth : "sm:4/5 mx-auto border",
    primary : {
        nav : "bg-indigo-600 px-4",
        link : " text-white py-6 px-10 hover:bg-indigo-500"
    },
    secondary : {
        nav : "bg-blue-600 px-4",
        link : " text-white py-6 px-10 hover:bg-blue-500"
    },
    info : {
        nav : "bg-cyan-600 px-4",
        link : " text-white py-6 px-10 hover:bg-cyan-500"
    },
    error : {
        nav : "bg-red-600 px-4",
        link : " text-white py-6 px-10 hover:bg-red-500"
    },
    warning : {
        nav : "bg-orange-600 px-4",
        link : " text-white py-6 px-10 hover:bg-orange-500"
    },
    success : {
        nav : "bg-green-600 px-4",
        link : " text-white py-6 px-10 hover:bg-green-500"
    },
    variant : {
        one : "flex items-center justify-start gap-12",
        two : "flex items-center justify-end gap-12",
        three : "flex items-center justify-between",
        four : "flex items-center justify-around",
        five : "flex items-center justify evenly"
    }
}



const Navbar = ({
    fullwidth=true,
    theme = "primary",
    variant = "one",
    fixed=false,
    menu
}) =>{

    const Menus = ({item}) =>{
        const m = (
            <>
                <Link 
                className={sample[theme].link}
                href={item.href}>{item.label}</Link>
            </>
        );
        return m;
    }

    const design = (
        <>
            <nav className={`${sample[theme].nav} ${fixed ? sample.fixed : null}`}>
                <div className={`
                ${sample.variant[variant]} 
                ${fullwidth ? null : sample.fixedWidth}
                `}>
                    <Link 
                    className={sample[theme].link}
                    href="/">{menu.brand}</Link>
                    <div>
                        {
                            menu.link.map((item,index)=>{
                                return <Menus key={index} item={item} />
                            })
                        }
                    </div>
                </div>
            </nav>
            
        </>
    );
    return design;
};

export default Navbar;
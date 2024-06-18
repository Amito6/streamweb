const sample = {
    "o-primary" :  "border border-teal-900 text-teal-600 shadow-lg rounded-sm px-4 py-2",
    "o-secondary" :  "border border-blue-600 text-blue-600 shadow-lg rounded-sm px-4 py-2",
    "o-info" :  "border border-cyan-600 text-cyan-600 shadow-lg rounded-sm px-4 py-2",
    "o-error" :  "border border-orange-600 text-orange-600 shadow-lg rounded-sm px-4 py-2",
    "o-warning" :  "border border-green-600 text-green-600 shadow-lg rounded-sm px-4 py-2",
    "o-success" :  "border border-red-600 text-red-600 shadow-xl rounded-sm px-4 py-2",

    "t-primary" :  "text-teal-600 rounded-sm px-4 py-2",
    "t-secondary" :  "text-blue-600 rounded-sm px-4 py-2",
    "t-info" :  "text-cyan-600 rounded-sm px-4 py-2",
    "t-error" :  "text-orange-600 rounded-sm px-4 py-2",
    "t-warning" :  "text-green-600 rounded-sm px-4 py-2",
    "t-success" :  "text-teal-600 rounded-sm px-4 py-2",

    "primary" :  "bg-teal-600 shadow-lg rounded-sm px-4 py-2 text-white",
    "secondary" : "bg-blue-600 shadow-lg rounded-sm px-4 py-2 text-white",
    "info" :  "bg-cyan-600 shadow-lg rounded-sm px-4 py-2 text-white",
    "error" :  "bg-orange-600 shadow-lg rounded-sm px-4 py-2 text-white",
    "warning" :  "bg-green-600 shadow-lg rounded-sm px-4 py-2 text-white",
    "success" :  "bg-teal-600 shadow-lg rounded-sm px-4 text-white"
}

/* Button ko use karte time iske andr do jo app bich mein klikha dikhana chahte ho and one attribute of theme as one of the sample values */
/* agar them enhi bhega to nornal text wala aa jayega but hum esse banayegnage ki agar nhi to aaya to usko default mille */
/* rest parameter diya hai onclick ya onmouseover ko receive krne k liye */


const Button = ({
    children,
    theme="primary",
    ...rest
}) =>{
    const design = (
        <>
            <button 
            {...rest} 
            className={sample[theme]}
            >
            {children}
            </button>
        </>
    );
    return design;
}

export default Button;
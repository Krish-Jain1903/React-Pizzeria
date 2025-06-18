import { Link } from "react-router-dom";

function Button({ children, disable = false, to = null, type = null, onClick = null}) {

    let className = "inline-block px-3 py-2 bg-yellow-300 text-black hover:bg-yellow-400 rounded-full uppercase transition-all duration-500 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none active:bg-yellow-500 active:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-3";

    if(type === "small") {
        className = "text-xs font-semibold px-3 py-2 bg-yellow-300 text-black hover:bg-yellow-400 rounded-full uppercase transition-all duration-500 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none active:bg-yellow-500 active:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-3"
    }
    else if(type === "secondary") {
        className = "inline-block px-3 py-2 border-2 border-stone-400 text-stone-500 hover:bg-stone-300 hover:text-stone-800 rounded-full uppercase transition-all duration-500 focus:ring focus:ring-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none active:bg-stone-500 active:outline-none disabled:cursor-not-allowed sm:px-3 sm:py-2";
    }
    else if(type === "round") {
        className = "rounded-full w-6 h-6 sm:w-10 sm:h-10 pb-0.5 font-semibold sm:pb-1 bg-yellow-300 hover:bg-yellow-400 transition-all duration-500";
    }


    if (to !== null ) return <Link className={className} to={to}>{children}</Link>
    if (onClick !== null) return <button disabled={disable} className={className} onClick = {onClick}>{children}</button>
    return (
        <button
        disabled={disable}
        className={className}
        >
        {children}
        </button>
    )
}

export default Button;

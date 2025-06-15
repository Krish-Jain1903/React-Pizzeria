import { Link } from "react-router-dom";

function Button({ children, disable = false, to = null, type = null}) {

    const className = `${type === "small" ? "text-xs font-semibold" : "inline-block"} px-3 py-2 bg-yellow-300 text-black hover:bg-yellow-400 rounded-full uppercase transition-all duration-500 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:outline-none active:bg-yellow-500 active:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-3`;

    if (to !== null ) return <Link className={className} to={to}>{children}</Link>
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

import { useRef, MouseEvent } from "react"
import { HeaderMenu } from "./HeaderMenu"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"

const Header = () => {

    const menuRef = useRef <HTMLMenuElement> (null)

    const handleToggleMenu = (event: MouseEvent <HTMLImageElement>) => {
        const classListMenu = menuRef.current?.classList
        classListMenu?.toggle("hidden");
        (event.target as HTMLElement).classList.toggle("opacity-60")
    }

    return (
        <header className="w-full h-[70vh] bg-cyan-300">
            <nav className="w-11/12 h-full mx-auto flex flex-col relative">
                <div className="w-full h-20 flex items-center justify-between">
                    <img src={logo} alt="logo icon" loading="lazy" draggable="false" />
                    <img src={menu} alt="menu icon" loading="lazy" draggable="false" onClick={handleToggleMenu} />
                </div>
                <h1 className="mt-12 text-white text-5xl font-extrabold text-center uppercase">We are creatives</h1>            
                <span className="w-1 h-24 mx-auto mt-8 block absolute inset-x-0 top-1/2 rounded-md bg-white">
                    <span className="w-1 h-6 mx-auto block absolute inset-x-0 bottom-0.5 origin-bottom -rotate-45 rounded-md bg-white" />
                    <span className="w-1 h-6 mx-auto block absolute inset-x-0 bottom-0.5 origin-bottom rotate-45 rounded-md bg-white" />
                </span>              
                <HeaderMenu menuRef={menuRef} />
            </nav>
        </header>
    )
}

export { Header }
import { HeaderMenuProps } from "../types/props"

const HeaderMenu = ({ menuRef }: HeaderMenuProps) => {
    return (
        <menu className="w-full py-8 px-5 hidden absolute top-24 bg-white" ref={menuRef}>
            <ul className="flex items-center flex-col gap-y-7 text-blue-200 text-xl font-barlow font-semibold">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <button className="h-12 px-7 text-black font-bold font-fraunces rounded-full bg-yellow">
                    Contact
                </button>
            </ul>
            <span className="border-[14px] border-white border-t-transparent border-l-transparent absolute -top-7 right-0" />
        </menu>
    )
}

export { HeaderMenu }
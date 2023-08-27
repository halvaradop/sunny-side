
const Footer = () => {

    return (
        <footer className="w-full bg-[#8fd3c4]">
            <div className="w-11/12 mx-auto py-14 text-cyan text-center">
                <h2 className="text-3xl font-barlow font-black tracking-tighter uppercase">sunnyside</h2>
                <ul className="w-full mt-8 mb-10 flex items-center justify-between text-lg font-bold text-cyan-200">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
        </footer>
    )
}

export { Footer }
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NavBarLinkAPI from "../NavBarLinkAPI/NavBarLinkAPI";
import { IoIosArrowDown } from "react-icons/io";
const MenuItems = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "#blog", name: "Blog" },
        { id: 3, path: "#contactUs", name: "Contact Us" },
        { id: 4, path: "#aboutUs", name: "About Us" },
        { id: 5, path: "#register", name: "Register" },
        { id: 6, path: "#fAQ", name: "FAQ" },
    ];

    return (
        <div className="flex justify-between items-center">
            <div>
                <ul className="lg:flex pt-6">
                    <li className="mr-10"><img src="/images/b6293a50-9e12-4358-8283-e126fce0fa30 1.png" alt="" className="rounded-lg" /></li>
                    {routes.map((route) => (
                        <NavBarLinkAPI key={route.id} route={route}></NavBarLinkAPI>
                    ))}
                </ul>
            </div>

            <div className="flex gap-5">
                <div className="flex ">
                    <LanguageDropdown />
                </div>
                <div className="border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-4 py-2 rounded-3xl text-white font-medium">
                    <button className="flex items-center gap-2">Agent Login </button>
                </div>
                <div className="border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-4 py-2 rounded-3xl text-white font-medium">
                    <button className="flex items-center gap-2">Login</button>
                </div>
            </div>
        </div>
    )
}

export default MenuItems

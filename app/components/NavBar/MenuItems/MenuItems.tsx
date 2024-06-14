"use client";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NavBarLinkAPI from "../NavBarLinkAPI/NavBarLinkAPI";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Content from "../../MoneyTransfer/Content/Content";
const MenuItems = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "#blog", name: "Blog" },
        { id: 3, path: "#contactUs", name: "Contact Us" },
        { id: 4, path: "#aboutUs", name: "About Us" },
        { id: 5, path: "#register", name: "Register" },
        { id: 6, path: "#fAQ", name: "FAQ" },
    ];

    return (
        <>
            <div className="flex justify-between lg:hidden px-4 pt-4">
                <div className="mr-10">
                    <img src="/images/b6293a50-9e12-4358-8283-e126fce0fa30 1.png" alt="" className="rounded-lg" />
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-4xl text-[#723EEB] "
                >
                    {open === true ? <IoMdClose /> : <IoMdMenu />}
                </div>
            </div>
            <div className={` duration-1000 absolute lg:static
                  ${open ? "left-0 right-0" : "-left-1/2 right-full"}
                  text-lg font-bold`} >
                <div className="lg:flex justify-between items-center lg:py-6">
                    <div>
                        <ul className="lg:flex ">
                            <li className="mr-10">
                                <img src="/images/b6293a50-9e12-4358-8283-e126fce0fa30 1.png" alt="" className="rounded-lg hidden lg:block" />
                            </li>
                            {routes.map((route) => (
                                <NavBarLinkAPI key={route.id} route={route}></NavBarLinkAPI>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:flex gap-5 grid justify-items-center">
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
            </div>


            <div className="lg:hidden">
                <Content open={open}></Content>
            </div>

        </>
    )
}

export default MenuItems

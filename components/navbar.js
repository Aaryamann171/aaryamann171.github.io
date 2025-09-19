import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import LinkHeader from "./LinkHeader";

const Navbar = () => {
    const [headerOpen, setHeaderOpen] = useState(false);
    const mobileNavLinksClasses = "text-xl px-4 mt-2 hover:bg-slate-200";
    return (
        <div className="w-full mx-2">
            <div
                className="md:flex hidden py-2 justify-between my-2 text-lg
             bg-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl"
            >
                <div className="flex items-center text-white">
                    <LinkHeader href="/" header="Aaryamann" />
                    <LinkHeader href="/skills" header="Skills" />
                    <LinkHeader href="/projects" header="Projects" />
                    <Link href="/contact" passHref>
                        <LinkHeader header="Contact" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="https://github.com/aaryamann171" passHref>
                        <LinkHeader header="GitHub" />
                    </Link>
                    <Link href="https://aaryamann171.github.io/blog/" passHref>
                        <LinkHeader header="Blog" />
                    </Link>
                </div>
            </div>
            <div className="flex justify-between px-4 my-2 md:hidden">
                <div>
                    <Link href="/" passHref>
                        <h1 className="text-2xl font-bold text-accent text-slate-300 md:mb-0">
                            Aaryamann
                        </h1>
                    </Link>
                </div>
                <div
                    onClick={() => setHeaderOpen(!headerOpen)}
                    className="text-3xl text-foreground text-slate-300 flex cursor-pointer md:hidden"
                >
                    {headerOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
            </div>
            {headerOpen ? (
                <div className="md:hidden py-4 text-center bg-slate-100 opacity-10 mx-4 rounded-3xl">
                    <Link href="/projects" passHref>
                        <h1 className={mobileNavLinksClasses}>Projects</h1>
                    </Link>
                    <Link href="/skills" passHref>
                        <h1 className={mobileNavLinksClasses}>Skills</h1>
                    </Link>
                    <Link href="https://aaryamann171.github.io/blog/" passHref>
                        <h1 className={mobileNavLinksClasses}>Blog</h1>
                    </Link>
                    <Link href="https://github.com/aaryamann171" passHref>
                        <h1 className={mobileNavLinksClasses}>GitHub</h1>
                    </Link>
                    <Link href="/contact" passHref>
                        <h1 className={mobileNavLinksClasses}>Contact</h1>
                    </Link>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [headerOpen, setHeaderOpen] = useState(false);
    const mobileNavLinksClasses = "text-2xl px-4 font-bold mt-2 hover:bg-slate-200"
    return (
        <div className="w-full bg-[#21201F] text-[#f3f4f6] p-2 border-2 border-black">
            <div className="md:flex hidden justify-between my-2 text-lg font-bold">
                <div className="flex items-center">
                    <Link href="/" passHref><h1 className="mx-2 text-accent px-2 cursor-pointer">[ Aaryamann ]</h1></Link>
                    <Link href="/skills" passHref><h1 className="px-4 text-foreground cursor-pointer">Skills</h1></Link>
                    <Link href="/projects" passHref><h1 className="px-4 text-foreground cursor-pointer">Projects</h1></Link>
                </div>
                <div className="flex items-center">
                  <Link href="https://github.com/aaryamann171" passHref><h1 className="px-4 text-foreground cursor-pointer">GitHub</h1></Link>
                  <Link href="https://aaryamann171.github.io/blog/" passHref><h1 className="px-4 text-foreground cursor-pointer">Blog</h1></Link>
                  <Link href="/contact" passHref><h1 className="px-4 text-foreground cursor-pointer">Contact</h1></Link>
                </div>
            </div>
            <div className="flex justify-between px-4 my-2 px-2 md:hidden">
                <div>
                    <Link href="/" passHref><h1 className="text-2xl font-bold text-accent md:mb-0">Aaryamann</h1></Link>
                </div>
                <div>
                </div>
                <div onClick={() => setHeaderOpen(!headerOpen)} className='text-3xl text-foreground flex cursor-pointer md:hidden'>
                    {headerOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
            </div>
            {
                headerOpen 
                ? <div className="md:hidden pb-4 text-center">
                    <Link href="/projects" passHref><h1 className={mobileNavLinksClasses}>Projects</h1></Link>
                    <Link href="/skills" passHref><h1 className={mobileNavLinksClasses}>Skills</h1></Link>
                    <Link href="https://aaryamann171.github.io/blog/" passHref><h1 className={mobileNavLinksClasses}>Blog</h1></Link>
                    <Link href="https://github.com/aaryamann171" passHref><h1 className={mobileNavLinksClasses}>GitHub</h1></Link>
                    <Link href="/contact" passHref><h1 className={mobileNavLinksClasses}>Contact</h1></Link>
                 </div>
                : null
            }
        </div>
    )
}

export default Navbar;
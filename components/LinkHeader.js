import Link from "next/link";

const LinkHeader = ({ href, header }) => {
    return (
        <Link href={href} passHref>
            <h1 className="px-4 text-foreground text-slate-200 cursor-pointer">
                {header}
            </h1>
        </Link>
    );
};

export default LinkHeader;

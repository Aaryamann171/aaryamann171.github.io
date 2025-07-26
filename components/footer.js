const Footer = () => {
    return (
        <div
            className="mx-auto w-full text-base md:text-lg flex justify-center 
            text-slate-200
            rounded-xl 
            bg-gray-700 
            backdrop-filter 
            backdrop-blur-sm 
            bg-opacity-10
        "
        >
            <footer className="text-center lg:text-left">
                <div className="text-center p-4">
                    <a
                        href="http://aaryamann171.github.io"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <span className="text-[#FFFAC2]">{"</>"}</span>
                        {" with "}
                        <span className="text-[#FAE4FC]">{"<3"}</span>
                        {" by Aaryamann"}
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

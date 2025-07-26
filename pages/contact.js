import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <div className="h-screen flex flex-col justify-between items-center">
            <Navbar />
            <div
                className="flex flex-col items-center text-lg md:text-2xl rounded-3xl bg-blue-100 mx-20 md:mx-0 p-10 md:p-40
        bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            >
                <div>
                    <h1 className="text-slate-200">
                        If you'd like to connect, send me an email at
                    </h1>
                </div>
                <div>
                    <h1 className="font-bold text-[#5DE4C7] ">
                        aaryamann171@gmail.com
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Contact;

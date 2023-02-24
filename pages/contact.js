import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="flex flex-col items-center text-2xl rounded-lg bg-slate-100 mx-20 md:mx-0 p-10 md:p-40 border-2 border-black">
        <div>
            <h1>In case you want to reach out to me, email me at</h1>
        </div>
        <div>
            <h1>aaryamann171@gmail.com</h1>
        </div>
      </div>
    <Footer />
    </div>
  );
};
export default Contact;
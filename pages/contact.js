import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="flex flex-col items-center text-lg md:text-2xl rounded-3xl bg-blue-100 mx-20 md:mx-0 p-10 md:p-40">
        <div>
          <h1 className="text-slate-800">In case you want to reach out to me, email me at</h1>
        </div>
        <div>
          <h1 className="font-bold text-slate-600">aaryamann171@gmail.com</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
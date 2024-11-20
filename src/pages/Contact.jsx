import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <div
        className="mt-[-90px] h-[70vh] px-6 pb-16"
        style={{
          backgroundImage: `url('/public/Background.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1120px] lg:mx-auto mx-6 flex flex-col justify-end h-full">
          <h1 className=" text-3xl md:text-4xl font-bold  text-[#1A3866] mt-2 leading-relaxed">
            Contact US
          </h1>
          <nav className="mt-4 text-sm">
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span className="font-medium text-[#1E7FFF]">Contact US</span>
          </nav>
        </div>
      </div>
      <div className="max-w-[1120px] lg:mx-auto mx-6 mt-24">
        <div className="border-b-2 px-2 py-6">
            <h1 className="text-4xl">How Can We Help You?</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;

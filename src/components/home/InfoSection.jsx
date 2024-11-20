import product from "../../../public/new_ausale.20a8529c.svg";
const InfoSection = () => {
  return (
    <div className=" pt-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <div className="lg:text-right md:text-end space-y-6">
        <p className="text-sm font-bold  uppercase">
          Jewellery Store App Suite
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight ">
          Simplified Operations, <br /> Increased Profits.
        </h1>
        <p className="text-base font-normal leading-relaxed">
          AURUMM revolutionizes the way jewellery stores operate, offering
          seamless solutions for gold saving schemes, online sales platforms,
          and inventory management. Streamline operations, increase
          productivity, and double your revenue with our longstanding
          cutting-edge solutions! <br /> Welcome to a future of innovation,
          efficiency, and brilliance. <br /> Welcome to AURUMM.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={product}
          alt="Jewellery Store App"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
export default InfoSection;

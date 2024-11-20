const Hero = () => {
  return (
    <div
      className="mt-[-90px] flex flex-col items-center pt-36 md:pt-48 text-center px-6 pb-16"
      style={{
        backgroundImage: `url('/public/Background.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-3xl sm:text-5xl md:text-6xl font-bold navtext text-[#1A3866] leading-relaxed mb-2">
        360° Software Solutions for <br />
        Your{" "}
        <span className="bg-gradient-to-r from-[#0F47C6] to-[#68A4DF] bg-clip-text text-transparent">
          JEWELLERY
        </span>{" "}
        Store
      </p>
      <h1 className="text-sm md:text-base text-[#254FAD] mb-5 max-w-2xl navtext">
        Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate
        Software Suite
      </h1>
      <button className="px-3 py-2 rounded-lg bg-[#254FAD] text-white text-lg font-semibold">
        Schedule A Demo
      </button>
    </div>
  );
};
export default Hero;

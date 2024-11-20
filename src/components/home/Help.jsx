import { motion } from "framer-motion";
import icon1 from "../../../public/product/icon_1.5e6099f9.svg fill.png";
import icon2 from "../../../public/product/icon_2.a07dbe9f.svg.png";
import icon3 from "../../../public/product/icon_3.0b2e7924.svg.png";
import icon4 from "../../../public/product/icon_4.62d8bce5.svg.png";
import brand from "../../../public/product/Background+Border.png";

const Help = () => {
  const helpItems = [
    {
      icon: icon4,
      title: "All-Round Assistance",
      description:
        "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
    },
    {
      icon: icon1,
      title: "Relationship Management",
      description:
        "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
    },
    {
      icon: icon2,
      title: "Technical Support",
      description:
        "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
    },
    {
      icon: icon3,
      title: "Stay Ahead",
      description:
        "We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!",
    },
  ];

  const clients = [
    { name: "Shanthi Jewellery", logo: brand },
    { name: "Thangalakshmi Jewellery", logo: brand },
    { name: "Swamy Jewellery", logo: brand },
    { name: "Sri Kandan Thangamaligai", logo: brand },
    { name: "Sayar Jewellers", logo: brand },
    {
      name: "Shanthi Jewellery Duplicate",
      logo: brand,
    },
  ];

  return (
    <>
      <div className="mt-20">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-base font-bold uppercase mb-4">
            We are Here to Help
          </p>
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            This is the Future of Jewellery Store Management
          </motion.h1>
        </div>

        {/* Help Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg border border-[#E5E7EB] px-4 py-6 transform transition-transform duration-700 group hover:scale-110 cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-14 w-14 object-cover"
              />

              <h5 className="text-base font-extrabold my-2">{item.title}</h5>
              <p className="text-gray-600 text-sm font-semibold">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-10 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-green-100 py-4 px-8 rounded-lg text-center">
          <div>
            <h2 className="text-4xl font-extrabold text-green-700">50+</h2>
            <p className="text-sm font-extrabold">Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-green-700">10K+</h2>
            <p className="text-sm font-extrabold">Downloads</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-green-700">72%</h2>
            <p className="text-sm font-extrabold">Client Revenue Increase</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-16">
        <div className="text-center">
          <p className="text-base font-bold uppercase mb-2">OUR CLIENTS</p>
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Brands That Trust Us!
          </motion.h1>
        </div>

        <motion.div
          className="relative overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="flex items-center gap-6 animate-marquee"
            style={{
              animation: "marquee 15s linear infinite",
              display: "flex",
            }}
          >
            {/* Original logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className=" bg-white  flex items-center justify-center"
                style={{
                  width: "213px",
                  height: "100px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Duplicated logos for seamless marquee */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className=" bg-white  flex items-center justify-center"
                style={{
                  width: "213px",
                  height: "100px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} duplicate`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Help;

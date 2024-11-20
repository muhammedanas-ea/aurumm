import { motion } from "framer-motion";
import product from "../../public/product/new_aupay.939fae7c.svg";
import product2 from "../../public/product/new_digigold.0a733f60.svg";

const Product = () => {
  const features = [
    {
      id: 1,
      title: "Chit & Scheme Management",
      description:
        "Facilitates seamless administration and tracking of various chit funds and schemes.",
      points: [
        "Flexible Scheme Creation and Management.",
        "Automated Tracking of Schemes.",
      ],
    },
    {
      id: 2,
      title: "Chit & Scheme Management",
      description:
        "Facilitates seamless administration and tracking of various chit funds and schemes.",
      points: [
        "Flexible Scheme Creation and Management.",
        "Automated Tracking of Schemes.",
      ],
    },
    {
      id: 3,
      title: "Chit & Scheme Management",
      description:
        "Facilitates seamless administration and tracking of various chit funds and schemes.",
      points: [
        "Flexible Scheme Creation and Management.",
        "Automated Tracking of Schemes.",
      ],
    },
    {
      id: 4,
      title: "Chit & Scheme Management",
      description:
        "Facilitates seamless administration and tracking of various chit funds and schemes.",
      points: [
        "Flexible Scheme Creation and Management.",
        "Automated Tracking of Schemes.",
      ],
    },
    {
      id: 5,
      title: "Chit & Scheme Management",
      description:
        "Facilitates seamless administration and tracking of various chit funds and schemes.",
      points: [
        "Flexible Scheme Creation and Management.",
        "Automated Tracking of Schemes.",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section with Animation */}
      <motion.div
        className="mt-[-90px] h-[85vh] px-6 pb-16"
        style={{
          backgroundImage: `url('/Background.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-[1120px] lg:mx-auto mx-6 flex flex-col justify-end h-full">
          <div className="w-fit border-b-2 border-green-600">
            <h2 className="text-[#1A3866] text-lg py-2 uppercase">AU Pay</h2>
          </div>
          <motion.h1
            className="text-3xl md:text-4xl text-[#1A3866] mt-2 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            An Exclusive Savings Scheme Payment <br /> App for Your Jewellery
            Store!
          </motion.h1>
          <nav className="mt-4 text-sm">
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span>Product & Features</span>
            <span className="mx-2">&gt;</span>
            <span className="font-medium text-[#1E7FFF]">Aupay</span>
          </nav>
        </div>
      </motion.div>

      {/* Product Sections with Image and Text Animation */}
      <div className="max-w-[1120px] lg:mx-auto mx-6 my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
          {/* Image Section */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={product}
              alt=""
              className="w-[60vh] max-h-[55vh] object-fit"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-start lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase mb-6">Au Pay</p>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(255,165,0,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Golden Gold App
            </motion.h1>
            <p className="text-lg md:text-2xl font-bold mb-6">
              We are Making Jewellery Scheme Payments Easier.
            </p>
            <p className="text-base leading-relaxed">
              AU Pay introduces a chit scheme payment system that transcends the
              ordinary, providing your patrons with a secure and efficient way
              to make their jewellery dreams a reality...
            </p>
          </motion.div>
        </div>

        {/* Second Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 my-20">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={product2}
              alt=""
              className="w-[60vh] max-h-[55vh] object-fit"
            />
          </motion.div>
          <motion.div
            className="text-start lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase mb-6">Au Pay</p>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(255,165,0,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Digi Gold
            </motion.h1>
            <p className="text-lg md:text-2xl font-bold mb-6">
              Next-Gen Gold Investment Platform
            </p>
            <p className="text-base leading-relaxed">
              DIGI GOLD offers real-time investment in gold, fully backed by
              actual gold stored in secure vaults...
            </p>
          </motion.div>
        </div>

        <h2 className="text-sm mb-4">FEATURES</h2>

        {/* Features Section */}
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-[#F6FAFF] rounded-lg p-6 mb-8 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-base mb-6">{feature.description}</p>
            <div className="flex flex-wrap items-center gap-5">
              {feature.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex cursor-pointer items-center space-x-3 bg-white p-3 rounded-lg border-l-2 border-green-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-green-100 rounded-full">
                    <img
                      src="/path-to-icon1.svg"
                      alt="Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;

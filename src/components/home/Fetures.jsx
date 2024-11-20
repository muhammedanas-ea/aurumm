import { motion } from "framer-motion";
import { CiCloudOn } from "react-icons/ci";
import { IoMapOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { BsBarChartFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import fetureimg from "../../../public/featuresimg.40ecab2c.svg";
import animate from "../../../public/featureanimated.16110a81.svg fill.png"

const Features = () => {
  const featureData = [
    { Icon: CiCloudOn, title: "Cloud Support" },
    { Icon: IoMapOutline, title: "Savings Scheme Management" },
    { Icon: GoDatabase, title: "Data Management" },
    { Icon: TiDocumentText, title: "Estimation & Billing" },
    { Icon: CiCloudOn, title: "Cost Management" },
    { Icon: BsBarChartFill, title: "Reporting & Dashboard" },
  ];

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold uppercase mb-5">FEATURES</p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Growth with AURUMM:
            <br />
            Your Partner in Success!
          </h1>
        </div>
        <motion.div 
          className="w-44 h-40 hidden md:block"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <img className="w-full h-full object-cover" src={animate} alt="animate" />
        </motion.div>
      </div>

      <div className="pt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Features List */}
        <motion.div 
          className="flex flex-col gap-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {featureData.map(({ Icon, title }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-[#F6F6F6] p-3 rounded-lg shadow-sm cursor-pointer"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Icon color="#61A375" size={25} />
              <h1 className="text-[#2C2C3C] text-lg font-bold">{title}</h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Image */}
        <motion.div
          className="flex flex-col"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={fetureimg}
            alt="Feature Illustration"
            className="max-w-full h-auto"
          />
          <p>
            All your data - accessible anywhere, anytime. Organised in the
            easiest manner possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

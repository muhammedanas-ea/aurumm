import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./FeturedCard";

const FeturedApp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="mt-20" ref={sectionRef}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold mb-5 uppercase">FEATURED APPS</p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          AURUMM for Your Jewellery Business
        </h1>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FeatureCard
          title="AU PAY"
          description="Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner."
          buttonText="Get Started"
          bgColor="bg-[#edfff2e5]"
          btColor="bg-[rgb(65,148,90)]"
          heading="An Exclusive Gold Savings Scheme Payment App"
        />
        <FeatureCard
          title="AU SALES"
          description="If you’re looking for a holistic store management solution, then AU Sales is the only app you need!"
          buttonText="Get Started"
          bgColor="bg-[#fff6e2e5]"
          btColor="bg-[rgb(215,181,109)]"
          heading="All-Round Inventory Management Assistant"
        />
        <FeatureCard
          title="AU SHOP"
          description="Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let`'`s begin!"
          buttonText="Get Started"
          bgColor="bg-[#dff3ffab]"
          btColor="bg-[rgb(54,164,229)]"
          heading="Give Your Fine Jewellery A Sleek Online Platform!"
        />
      </motion.div>
    </div>
  );
};

export default FeturedApp;

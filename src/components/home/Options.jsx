import { useState } from "react";
import product1 from "../../../public/product/new_aupay.939fae7c.svg";
import product2 from "../../../public/product/new_ausale.20a8529c.svg";
import product3 from "../../../public/product/new_aushop.a2faba30.svg";

const Options = () => {
  const [activeTab, setActiveTab] = useState("aupay"); 

  const tabData = {
    aupay: {
      title: "The Golden Gold App",
      description: "We’re Making Jewellery Scheme Payments Easier.",
      image: product1,
      label: "Au Pay",
    },
    ausales: {
      title: "The Hybrid ERP Magic",
      description: "Inventory Management Excellence In Every Tap",
      image: product2,
      label: "AU Sales",
    },
    aushop: {
      title: "Open Your Shop To World",
      description: "A Smooth Jewellery Shopping Experience",
      image: product3,
      label: "AU Shop",
    },
  };

  return (
    <div className="mt-12">
      {/* Navigation Tabs */}
      <div className="flex flex-shrink justify-center gap-4 mb-10">
        {Object.keys(tabData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-3 md:px-12 lg:px-16 py-3 rounded-full transition  ${
              activeTab === key
                ? "bg-blue-500 text-white focus:ring-blue-300"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tabData[key].label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].label}
            className="w-[70vh] max-h-[60vh] object-fit"
          />
        </div>

        {/* Text Content */}
        <div className="text-start lg:text-left">
          <p className="text-sm font-bold uppercase mb-8">
            {tabData[activeTab].label}
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(255,165,0,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tabData[activeTab].title}
          </h1>
          <p className="text-lg sm:text-4xl font-bold">
            {tabData[activeTab].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;

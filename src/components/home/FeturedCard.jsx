import PropTypes from "prop-types";
import icon from "../../../public/symbol.2d89ec5c.svg";
import eclipse from "../../../public/Ellipse.bc4408b9.png";

const FeatureCard = ({
  title,
  description,
  buttonText,
  bgColor,
  btColor,
  heading,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${bgColor} text-black flex flex-col justify-between relative transform transition-transform duration-1000 group hover:scale-90 cursor-pointer`}
    >
      <img
        className="absolute right-0 top-0 w-16 md:w-20"
        src={eclipse}
        alt=""
      />
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white rounded-lg flex justify-center items-center shadow-md px-3 py-2 gap-3">
          <img className="h-8 w-8" src={icon} alt="Feature Icon" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      <h1 className="font-bold text-base mb-4">{heading}</h1>
      <hr className="my-4 border-gray-500" />
      <div className="mb-4">
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex justify-start mt-auto">
        <button
          className={`${btColor} text-white px-6 py-2 rounded-[25px] shadow-sm`}
        >
          {buttonText} →
        </button>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  btColor: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default FeatureCard;

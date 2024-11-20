import FeturedApp from "../components/home/FeturedApp";
import Fetures from "../components/home/Fetures";
import Help from "../components/home/Help";
import Hero from "../components/home/Hero";
import InfoSection from "../components/home/InfoSection";
import Options from "../components/home/Options";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[1120px] lg:mx-auto mx-6">
        <InfoSection />
        <FeturedApp />
        <Fetures />
        <Options />
        <Help />
      </div>
    </>
  );
};

export default Home;

import Contact from "../components/HomePage/Contact";
import Driver from "../components/HomePage/Driver";
import ExperieceThrill from "../components/HomePage/ExperieceThrill";
import Header from "../components/HomePage/Header";
import HeroSection from "../components/HomePage/HeroSection";
import News from "../components/HomePage/News";
import SponsorsSection from "../components/HomePage/SponsorsSection";
import Teams from "../components/HomePage/Teams";
import Tickets from "../components/HomePage/Tickets";
import FAQ from "../components/HomePage/FAQ";
import Footer from "../components/HomePage/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperieceThrill />
      <div className=" max-w-[1920px] m-auto  ">
        <Teams />
      </div>
      <Driver />
      <div className=" sm:px-[6rem] max-w-[1920px] m-auto  ">
        <Tickets />
      </div>
      
        <SponsorsSection />
       {/*  <News /> */}
      <Contact />
      <FAQ />

      <Footer />
    </>
  );
};

export default HomePage;

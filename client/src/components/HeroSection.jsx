import HeroText from "./HeroText";
import Navbar from "./Navbar";

const HeroSection = () => {
    return ( 
        <div className="bg-[url('./assets/svg/hero-section.svg')] w-full bg-no-repeat bg-cover">
            <Navbar />
            <HeroText />
        </div>
     );
}
 
export default HeroSection;
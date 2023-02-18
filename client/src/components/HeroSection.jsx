import BusinessSection from "./BusinessSection";
import FeatureSection from "./FeatureSection";
import HeroText from "./HeroText";
import MapSection from "./MapSection";
import Navbar from "./Navbar";

const HeroSection = () => {
    return ( 
        <div className="bg-[url('./assets/svg/hero-section.svg')] w-full bg-no-repeat bg-cover">
            <Navbar />
            <HeroText />
            <FeatureSection />
            <BusinessSection />
            <MapSection />
        </div>
     );
}
 
export default HeroSection;
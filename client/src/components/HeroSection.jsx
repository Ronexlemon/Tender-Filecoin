import BusinessSection from "./BusinessSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroText from "./HeroText";
import MapSection from "./MapSection";
import Navbar from "./Navbar";
import SubscribeSection from "./SubscribeSection";

const HeroSection = () => {
    return ( 
        <div className="bg-[url('./assets/svg/hero-section.svg')] w-full bg-no-repeat bg-cover">
            <Navbar />
            <HeroText />
            <FeatureSection />
            <BusinessSection />
            <MapSection />
            <SubscribeSection />
            <Footer />
        </div>
     );
}
 
export default HeroSection;
import heroimage from "../assets/HeroImage.png";
import Button from "./Button";
import "../styles/hero.css";

const Hero = () => (
  <div className="hero-container">
    {/* Image Section */}
    <img src={heroimage} alt="Hero" className="hero-image" />

    {/* Text Box Section */}
    <div className="hero-text-box pb-[20px] ">
      <p>
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </p>

      <Button className="mt-4 w-[214px] h-[38px] xs:text-[12px] text-[14px] font-medium">
        GET FREE CONSULTATION
      </Button>
    </div>
  </div>
);

export default Hero;

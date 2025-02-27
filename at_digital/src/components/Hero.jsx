import heroimage from "../assets/HeroImage.png";
import Button from "./Button"; // Importing the Button component

const Hero = () => (
    <div 
      className="w-full relative bg-center bg-no-repeat bg-cover min-h-[80vh] md:min-h-[90vh] flex items-end pb-10"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div 
        className="absolute xl:w-[630px] xl:h-[306px] xl:top-[240px] gap-[20px] pt-[24px] pr-[40px] pb-[32px] pl-[40px] text-white 
        bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] lg:top-[250px] lg:left-[40px]
        xl:top-[430px] xl:left-[50px] lg:w-[622px] lg:h-[306px] xl:w-[630px] xl:h-[306px] md:top-[630px] md:left-[0px] xs:top-[210px] xs:left-[0px]"
      >
        <h1 className="font-[Inter] font-bold text-[48px] leading-[48px] tracking-[-0.02em]">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
  
        <Button className="mt-4 w-[214px] h-[38px]">GET FREE CONSULTATION</Button>
      </div>
    </div>
  );

export default Hero;

import img2 from "../assets/image2.png";
import Button from "./Button";

const DigitalStrategy = () => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full max-w-[1064px] px-6 md:px-12 mx-auto pt-12 md:pt-16">
    
    {/* Image Section (Smaller Size) - Appears First on Mobile, Second on Desktop */}
    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[330px] flex-shrink-0 order-1 md:order-2">
      <img 
        src={img2} 
        alt="Digital Strategy" 
        className="w-full h-auto object-contain"
      />
    </div>
    
    {/* Content Section (More Space) - Appears Second on Mobile, First on Desktop */}
    <div className="flex flex-col w-full max-w-[650px] text-center md:text-left order-2 md:order-1">
      <h2 className="text-[#4F46E5] text-[20px] sm:text-[22px] md:text-[27px] font-[Poppins] font-semibold leading-[26px] sm:leading-[28px] md:leading-[33px] tracking-[0.4px]">
        Digital Strategy Consulting
      </h2>
      <p className="text-[16px] sm:text-[15px] md:text-[16px] font-[Inter] leading-[22px] sm:leading-[23px] md:leading-[24px] mt-4">
        Your digital strategy should complement the overall marketing strategy of the company. 
        In online marketing, each component will never work in isolation, and every business 
        needs a different mix. We provide a clear concept and strategic overview to find the 
        most efficient model for your business.
      </p>
      
      <Button className="mt-6 w-[120px] xs:w-[129px] xs:h-[36px] sm:h-[38px] mx-auto md:mx-0">LEARN MORE</Button>
    </div>
  </div>
);

export default DigitalStrategy;

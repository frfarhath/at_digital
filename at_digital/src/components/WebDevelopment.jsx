import img1 from "../assets/image1.png";
import Button from "./Button";

const WebDevelopment = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 w-full max-w-[1064px] px-6 md:px-12 mx-auto pt-12 md:pt-16">
    
    {/* Image Section */}
    <div className="max-w-[280px] sm:max-w-[320px] md:max-w-[330px] flex-shrink-0">
      <img 
        src={img1} 
        alt="Web & Mobile App Development" 
        className="w-full h-auto object-contain"
      />
    </div>
    
    {/* Content Section */}
    <div className="flex flex-col md:flex-1 text-center md:text-left">
      <h2 className="text-[#4F46E5] text-[20px] sm:text-[22px] md:text-[27px] font-[Poppins] font-semibold leading-[26px] sm:leading-[28px] md:leading-[33px] tracking-[0.4px]">
        Web & Mobile App Development
      </h2>
      <p className="text-[16px] sm:text-[15px] md:text-[16px] font-[Inter] leading-[22px] sm:leading-[23px] md:leading-[24px] mt-4">
        Your web and mobile Apps are pieces of the puzzle to grow your business. 
        We use frameworks that tailor content and engagement methods to respond to 
        different intents shown by your potential customers who interact with your business online.
      </p>
      
      <Button className="mt-6 w-[120px] xs:w-[129px] xs:h-[36px] sm:h-[38px] mx-auto md:mx-0">LEARN MORE</Button>
    </div>
  </div>
);

export default WebDevelopment;

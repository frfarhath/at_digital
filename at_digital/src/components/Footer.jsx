import logo from "../assets/Logo.png"; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white p-6 mt-10px">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Logo & Description */}
        <div className="w-full md:w-[380px] mb-6 md:mb-0">
          <img src={logo} alt="at digital" className="mb-4" />
          <p className="text-[14px] leading-[20px]">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
          </p>
        </div>

        {/* Technologies & Services */}
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-12 md:gap-[120px] w-full md:w-auto">
          <div className="w-full sm:w-auto">
            <h3 className="font-semibold text-[16px] mb-2">Our Technologies</h3>
            <ul className="text-[14px] leading-[24px]">
              <li className="mb-[2px]">ReactJS</li>
              <li className="mb-[2px]">Gatsby</li>
              <li className="mb-[2px]">NextJS</li>
              <li className="mb-[2px]">NodeJS</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h3 className="font-semibold text-[16px] mb-2">Our Services</h3>
            <ul className="text-[14px] leading-[24px]">
              <li className="mb-[2px]">Social Media Marketing</li>
              <li className="mb-[2px]">Web & Mobile App Development</li>
              <li className="mb-[2px]">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms */}
      <div className="text-center mt-6 border-t border-white pt-2 text-[12px] w-full md:w-[630px] mx-auto flex justify-center gap-4">
        <a href="#" className="mr-4">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;

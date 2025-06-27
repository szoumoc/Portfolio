import { Heart } from "lucide-react";
import CButton from "./ContactButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 w-full">
      <div className="w-full">
        {/* Main Content Section */}


        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
        <div className="w-full px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 w-full">
            
            {/* Left Side - Links */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <a href="https://www.linkedin.com/in/szoumo/" target="_blank" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide">
                LINKEDIN
              </a>
              <a href="https://www.instagram.com/szoumo/" target="_blank" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide">
                INSTAGRAM
              </a>

            </div>

            {/* Center - Contact and Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <a href="mailto:soumosaha2025gcrs@gmail.com" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide">
                soumosaha2025gcrs@gmail.com
              </a>
              <span className="text-gray-500 uppercase tracking-wide">
                ALL RIGHTS RESERVED SOUMO SAHA ©2025©
              </span>
            </div>

            {/* Right Side - More Links */}
 
          </div>
        </div>

        {/* Large Name Display */}
        <div className="mt-16 w-full flex px-4 lg:px-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] text-white leading-none tracking-tighter text-left">
            SOUMO SAHA
          </h1>
          <div className="flex items-center justify-center px-[10rem]">
          <CButton />
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
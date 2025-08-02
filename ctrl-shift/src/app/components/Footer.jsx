import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Dgc from "../../../public/assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 bg-white/90 overflow-hidden">
        
        {/* Left Section */}
        <div className="flex-1 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            CTRL + SHIFT
          </h2>
          <p className="text-sm text-gray-700 mb-2 italic">
            A Christian Event for Creatives, Tech & Music.
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-sm mt-6 text-gray-800 font-medium">
            <span>Agenda</span>
            <span>Terms & Conditions</span>
            <span>Speakers</span>
            <span>Privacy Policy</span>
            <span>Register</span>
            <span>Cookie Policy</span>
            <span>Venue</span>
            <span>FAQ</span>
          </div>
          <p className="text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} CTRL + SHIFT. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 bg-purple-700 text-white flex flex-col justify-between">
          <div>
            <h3 className="uppercase tracking-widest font-semibold text-sm mb-2">
              Stay Updated
            </h3>
            <p className="text-sm mb-6 text-gray-200">
              Subscribe for event updates & exclusive content.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/70 py-2 mb-4 placeholder-white text-white text-sm outline-none"
            />
            <button className="bg-white text-purple-700 font-semibold px-6 py-2 hover:opacity-90 transition">
              Stay updated
            </button>
          </div>

          <div className="mt-10">
            <p className="uppercase text-sm font-semibold tracking-widest mb-4">
              Follow Us
            </p>
            <div className="flex gap-4 text-white text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center mt-6">
        <Image src={Dgc} alt="Davidic Generation Church Logo" width={60} height={60} />
      </div>
      <p className="text-center text-white text-xs mt-2">
        Powered by Davidic Generation Church
      </p>
    </footer>
  );
}

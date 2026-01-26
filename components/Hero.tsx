import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaFlask } from 'react-icons/fa';
  import homePageImage from "@/public/images/nation.webp"
import Image from 'next/image';

function Hero() {
  return (
    <div id="home" className="pb-20 pt-36 relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={homePageImage}
          alt="Chemical Industry Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="flex justify-center relative my-20 z-10 w-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-600 max-w-80 font-semibold">
            Excellence in Chemical Solutions Since 1995
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl !text-gray-800"
            words="AL-IBRAHIM GROUP"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gray-600 mt-4">
            Leading Provider of Premium Chemical & Industrial Solutions
          </p>

          <a href="#about">
            <MagicButton
              title="Discover Our Expertise"
              icon={<FaFlask />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

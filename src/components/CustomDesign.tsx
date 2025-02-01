'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import machine from "../../public/assets/feather.jpg" 
import Link from "next/link";

const CustomDesign = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`container mx-auto px-4 py-12 transition-all duration-700 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Custom Designs
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            With over 10 years of expertise, we create intricately embroidered
            designs on dresses, bed sheets, shawls, cushions, and wall decor. Our
            mission is to provide products that showcase our dedication to quality
            and elegance. We deliver across Pakistan, ensuring that each item we
            craft is a reflection of sophistication and artistry.
          </p>
          <Link href={"/"}>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors duration-300">
          
                       Explore Our Work
                      

          </button>
          </Link>

        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 w-full flex justify-center items-center transition-transform transform hover:scale-105">
          <Image
            src={machine}
            alt="Machine Embroidery Work"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;

'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import image from "../../public/assets/embridrywhite.jpg"
const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between p-10 gap-8 transition-all duration-6S00 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          We are a passionate team delivering the best eCommerce experience. Our
          goal is to provide high-quality products with an easy and fast shopping
          experience for our customers.At Shopr, we specialize in exquisite machine embroidery on a variety of products including dresses, bed sheets, shawls, cushions, and wall decor. With over 10 years of experience, we have honed our craft and established ourselves as a trusted name in the industry. Our commitment to quality and precision ensures that every piece we create is not just a product, but a work of art. We take pride in delivering beautifully embroidered items to customers all across Pakistan, bringing elegance and tradition into homes and wardrobes with every stitch. Whether you’re looking for something for your home or wardrobe, we promise unmatched craftsmanship and service.
        </p>
      </div>
      <div className="lg:w-1/3 w-full flex justify-center">
        <Image
          src={image}
          alt="About Us"
          className="rounded-lg shadow-lg max-w-full h-auto transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default About;

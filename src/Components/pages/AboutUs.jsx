import React from 'react';
import { Link } from 'react-router-dom';

import FounderImg from './../../assets/Founder_CEO.jpeg';
import FounderMinazDImg from './../../assets/Founder_minaz_dream.jpeg';
import CoFounder from './../../assets/Co-Founder.jpeg';
import CoFounder2 from './../../assets/Co-Founder_2.jpeg';
import AboutImg from './../../assets/aboutPic.jpg';

const AboutUs = () => {



  return (
    <div className="bg-customBg bg-opacity-80 min-h-screen py-6 px-6 sm:px-12">
      <div className="bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={AboutImg}
            alt="Our Team PNG"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl text-white font-semibold">About Us</h1>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span> – Where Trend Meets Timeless!</h2>
          <p className="text-gray-700 mb-6">
            Discover a world of contemporary fashion at <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, your go-to destination for stylish apparel designed for the modern individual. Our curated collection features an array of premium jackets, cozy sweaters, elegant Panjabis, versatile shirts, and more, all crafted to elevate your wardrobe. Whether you're dressing for a casual day out, an adventurous ride, or a formal occasion, our diverse styles cater to every moment.
          </p>

          <p className="text-gray-700 mb-6">
            At <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, we believe in the perfect blend of quality and comfort. Each piece in our collection is thoughtfully designed with the latest trends in mind, ensuring you not only look good but feel great. With our commitment to exceptional craftsmanship, you can trust that our clothing is made to last.
          </p>
          <p className="text-gray-700 mb-6">
            Explore our range today and experience the fusion of fashion and functionality. Join our community of trendsetters who embrace individuality and express their unique style. We’re excited to help you redefine your wardrobe with our timeless and trendy pieces.
          </p>
          <p className="text-gray-700 mb-6">
            Shop with us and discover why <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span> is the ultimate choice for style-conscious individuals. Your journey to impeccable style starts here!
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            At <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, we believe fashion is not just about clothing—it's about self-expression, connection, and community. Founded by three passionate friends, our journey began with a shared vision: to revolutionize the clothing brand landscape and create an inclusive space for style enthusiasts.
          </p>
          <p className="text-gray-700 mb-6">
            Our adventure started with a simple idea: to blend timeless designs with contemporary flair, making high-quality fashion accessible to everyone. We set out to break free from conventional norms, infusing our collections with innovative styles that reflect the diverse lifestyles of teenagers, young professionals, and bikers.
          </p>
          <p className="text-gray-700 mb-6">
            What sets us apart? It's our unwavering commitment to quality, sustainability, and authenticity. Each piece in our collection is meticulously crafted, ensuring that every customer feels confident and stylish, no matter the occasion. We celebrate individuality, encouraging our community to embrace their unique style and inspire others along the way.
          </p>
          <p className="text-gray-700 mb-6">
            Join us as we redefine fashion together, one piece at a time. At <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, we're more than just a brand; we're a movement that champions creativity, confidence, and a love for style. Welcome to the future of fashion!
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At
            <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, our mission is to empower individuals through fashion that resonates with their unique style and identity. We are dedicated to redefining the clothing industry by offering high-quality, trendy apparel that caters to the diverse needs of teenagers, young professionals, and bikers.
          </p>
          <p className="text-gray-700 mb-6">
            We strive to create a brand that embodies authenticity, creativity, and inclusivity. Our goal is to inspire confidence in our customers, encouraging them to express themselves freely through their fashion choices. By staying attuned to the latest trends and innovations, we ensure our collections remain fresh, relevant, and accessible.
          </p>
          <p className="text-gray-700 mb-6">
            Sustainability is at the heart of our mission. We are committed to ethical practices that minimize our environmental impact while promoting responsible consumption. Our aim is to build a community where style meets sustainability, paving the way for a more conscious fashion future.
          </p>
          <p className="text-gray-700 mb-6">
            Join us on this journey as we reshape the concept of clothing brands, one stylish piece at a time. Together, we can make a difference in the world of fashion and create a positive impact on our community.
          </p>



          <h2 className="text-3xl font-bold my-6 text-center animate-pulse">Meet the Team</h2>
          <p className="text-gray-700 mb-6">
            At <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>, our strength lies in our dynamic team of passionate individuals who share a common vision: to revolutionize the clothing industry. We are a diverse group of friends and fashion enthusiasts committed to creating stylish, high-quality apparel that resonates with our customers. Get to know the people behind your favorite looks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  m-1">
            <div className=" w-full p-4">
              <div className="bg-sky-50 h-64 rounded-lg py-3">
                <img
                  src={FounderImg}
                  alt="Team Member 1"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">Gazi Ahsan Ullah</h3>
                <p className="text-gray-600 text-center animate-pulse">Co-Founder & CEO</p>
              </div>
            </div>

            <div className="w-full p-4">
              <div className="bg-sky-50 h-64 rounded-lg shadow-md py-3">
                <img
                  src={CoFounder}
                  alt="Team Member 3"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">Tarik Aziz</h3>
                <p className="text-gray-600 text-center animate-pulse">Co-Founder & Creative Director</p>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="bg-sky-50 h-64 rounded-lg shadow-md py-3">
                <img
                  src={CoFounder2}
                  alt="Team Member 4"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">Sharif Islam Imran</h3>
                <p className="text-gray-600 text-center animate-pulse">Co-Founder & Marketing Strategist</p>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="bg-sky-50 h-64 rounded-lg shadow-md py-3">
                <img
                  src={FounderMinazDImg}
                  alt="Team Member 2"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">Amina Akter</h3>
                <p className="text-gray-600 text-center animate-pulse">Founder, Mina's Dream</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Thank you for choosing <span>
              <a href="https://www.millennial-clothing.com" target="_blank" rel="noopener noreferrer" className='text-orange-500 hover:underline'>
                Millennial Clothing
              </a>
            </span>. We look forward to serving you and making your shopping experience exceptional.
            </p>
            <Link
              to="/contact-us"
              className="animate-bounce  bg-sky-500 text-sky-50 py-2 px-4 rounded hover:bg-sky-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  // Replace this with your actual WhatsApp number
  const whatsappNumber = "+237673018437";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Bringing Healthcare to Every Corner</h2>
        <p className="text-xl mb-8 text-gray-700">PaceCare Association is dedicated to improving healthcare access and education in underserved communities.</p>
        <div className="flex justify-center gap-4">
          <a 
            href="#donate" 
            className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300 inline-flex items-center"
          >
            Donate Now
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Pin, QuoteIcon } from 'lucide-react';

const CEOLetter = () => (
  <section className="relative py-8 px-4">
    {/* Decorative pin */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="bg-red-500 rounded-full p-3 shadow-lg transform hover:scale-105 transition-transform">
        <Pin className="w-6 h-6 text-white" />
      </div>
    </div>
    
    {/* Letter container */}
    <div className="max-w-3xl mx-auto transform rotate-1">
      <div className="bg-[#fffdf7] rounded-lg shadow-xl p-8 border border-gray-200 relative">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-10">
          <QuoteIcon className="w-20 h-20 text-blue-600" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">A Letter from Our CEO</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-semibold text-gray-700">
              Dear Friends and Supporters,
            </p>
            
            <p className="text-gray-700">
              As we reflect on the past year, I am filled with immense gratitude for the milestones we've achieved together. In 2023, we treated over 
              <span className="font-bold text-blue-600"> 100,000 patients</span>, performed 
              <span className="font-bold text-blue-600"> 500 life-saving surgeries</span>, and trained 
              <span className="font-bold text-blue-600"> 1,000 healthcare workers</span>. 
              These accomplishments would not have been possible without your unwavering support.
            </p>
            
            <p className="text-gray-700">
              This year, we are committed to expanding our reach to 
              <span className="font-bold text-blue-600"> 20 new communities</span>, launching a 
              <span className="font-bold text-blue-600"> telemedicine platform</span>, and advocating for better health policies at the national level. 
              Your continued support will help us achieve these goals and bring healthcare to even more people in need.
            </p>
            
            <p className="text-gray-700">
              Thank you for being a part of our journey. Together, we can create a healthier, brighter future for all.
            </p>
          </div>
          
          {/* Signature section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-end justify-end flex-col">
              <p className="text-gray-700 italic">With gratitude,</p>
              <p className="text-2xl font-bold text-blue-600">Dr. Atabong Nelson</p>
              <p className="text-gray-600">CEO, PaceCare Association</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CEOLetter;
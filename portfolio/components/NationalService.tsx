import React from 'react';
import { nationalServices } from '@/data';
import { FaIndustry } from 'react-icons/fa';
import Image from 'next/image';
import nation from "@/public/images/nation.webp"

function NationalService() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="heading text-gray-800">
        Serving <span className="text-blue-600">Pakistan</span> with Pride
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Contributing to national development by powering key industries with essential chemical solutions
      </p>

      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-10 max-w-5xl mx-auto shadow-lg">
        <Image
          src={nation}
          alt="Industrial Manufacturing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
          <h3 className="text-white text-3xl font-bold">Powering Pakistan's Industries</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {nationalServices.map((service, index) => (
          <div
            key={index}
            className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 group overflow-hidden hover:shadow-lg"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl group-hover:bg-blue-200 transition-all duration-300 opacity-30" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FaIndustry className="text-3xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-blue-600 font-semibold text-sm">
                  📊 Impact: <span className="text-gray-800">{service.impact}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* National Contribution Summary */}
      <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border border-blue-200 shadow-sm">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Our Commitment to National Growth
        </h3>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-6">
          For three decades, AL-IBRAHIM GROUP has been more than a chemical supplier—we've been a partner in Pakistan's industrial revolution. From supporting textile mills in Faisalabad to pharmaceutical manufacturers in Karachi, from agricultural innovation in Punjab to infrastructure projects nationwide, our chemicals power the industries that drive our nation forward.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="p-4">
            <p className="text-3xl font-bold text-blue-600">15+</p>
            <p className="text-gray-600 text-sm">Industries Served</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-300" />
          <div className="p-4">
            <p className="text-3xl font-bold text-blue-600">2500+</p>
            <p className="text-gray-600 text-sm">Business Partners</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-300" />
          <div className="p-4">
            <p className="text-3xl font-bold text-blue-600">30+</p>
            <p className="text-gray-600 text-sm">Years of Service</p>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Ready to partner with Pakistan's most trusted chemical solutions provider?
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default NationalService;

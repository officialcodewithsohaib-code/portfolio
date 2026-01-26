import React from 'react';
import { companyHighlights } from '@/data';
import Image from 'next/image';
import OurJourney from "@/public/images/ourjourney.jpg"
function CompanyOverview() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <h2 className="heading text-gray-800">
        Our <span className="text-blue-600">Legacy</span> of Excellence
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Three decades of trusted partnership with industries across Pakistan, delivering quality chemical solutions with integrity and innovation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {companyHighlights.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={OurJourney}
            alt="Modern Chemical Laboratory"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 1995 in Karachi, AL-IBRAHIM GROUP began with a vision to revolutionize Pakistan's chemical industry. Starting with a single warehouse and a dedicated team of 5, we have grown into a nationwide network with advanced facilities across 8 major cities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our commitment to quality, safety, and customer satisfaction has made us the preferred partner for over 2,500 businesses spanning pharmaceuticals, textiles, agriculture, and manufacturing sectors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;

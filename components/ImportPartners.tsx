import React from 'react';
import { importPartners } from '@/data';
import { FaGlobe, FaShippingFast } from 'react-icons/fa';
import Image from 'next/image';
import shippingImage from "@/public/images/global.jpg"

function ImportPartners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <h2 className="heading text-gray-800">
        Global <span className="text-blue-600">Import Network</span>
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Partnering with world-leading manufacturers to bring you premium quality chemicals and materials
      </p>

      {/* Add shipping image */}
      <div className="relative h-[250px] rounded-2xl overflow-hidden mb-10 max-w-5xl mx-auto shadow-lg">
        <Image
          src={shippingImage}
          alt="International Shipping"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <h3 className="text-white text-3xl font-bold">Global Supply Chain Network</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {importPartners.map((partner, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{partner.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{partner.country}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaShippingFast className="text-blue-600" />
                    Partner since {partner.since}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-semibold mb-2 text-sm flex items-center gap-2">
                  <FaGlobe className="text-blue-600" />
                  Key Products:
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 shadow-sm">
        <p className="text-center text-gray-700 text-lg">
          Importing from <span className="text-blue-600 font-bold">{importPartners.length} countries</span> across Asia, Middle East, and Europe to ensure diverse, high-quality product portfolio
        </p>
      </div>
    </section>
  );
}

export default ImportPartners;

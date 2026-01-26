import React from 'react';
import { serviceLocations } from '@/data';
import { FaMapMarkerAlt, FaWarehouse, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import locationImage from "@/public/images/imageee.png"

function ServiceLocations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <h2 className="heading text-gray-800">
        Nationwide <span className="text-blue-600">Presence</span>
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Strategically located facilities ensuring rapid delivery and local support across Pakistan
      </p>

      {/* Hero Image */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-10 max-w-5xl mx-auto shadow-lg">
        <Image
          src={locationImage}
          alt="Distribution Warehouse"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <h3 className="text-white text-3xl font-bold">Modern Distribution Centers</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {serviceLocations.map((location, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  {location.city}
                </h3>
                <p className="text-sm text-gray-600">{location.region}</p>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <FaWarehouse className="text-blue-600" />
                <span className="text-sm font-medium">
                  {location.facilities} {location.facilities === 1 ? 'Facility' : 'Facilities'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaCalendarAlt className="text-blue-600" />
                <span className="text-sm">Since {location.established}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-lg">
          Operating <span className="text-blue-600 font-bold">{serviceLocations.length} strategic locations</span> with <span className="text-blue-600 font-bold">{serviceLocations.reduce((sum, loc) => sum + loc.facilities, 0)} total facilities</span> nationwide
        </p>
      </div>
    </section>
  );
}

export default ServiceLocations;

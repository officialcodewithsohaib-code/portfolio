'use client';

import React from 'react';
import { customerStats, serviceFeatures } from '@/data';
import { motion } from 'motion/react';
import Image from 'next/image';
import customerSatisfactionImage from "@/public/images/customersatisfaction.jpg"
function CustomerCare() {
  return (
    <section id="customers" className="py-20 bg-white">
      <h2 className="heading text-gray-800">
        Customer <span className="text-blue-600">Satisfaction</span> First
      </h2>
      <p className="text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Our success is measured by your satisfaction. Every client receives personalized attention and expert support
      </p>

      {/* Add customer support image */}
      <div className="relative h-[280px] rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto shadow-lg">
        <Image
          src={customerSatisfactionImage}
          alt="Customer Support Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <h3 className="text-white text-3xl font-bold">Dedicated Support Excellence</h3>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {customerStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white text-center hover:scale-105 transition-transform shadow-lg"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">
              {stat.number}{stat.suffix}
            </div>
            <p className="text-blue-50 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Service Features */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          How We Care for Our <span className="text-blue-600">Valued Clients</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Testimonial Section */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Dedicated Support Team
        </h3>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Our customer care philosophy is built on three pillars: <span className="text-blue-600 font-semibold">Responsiveness</span>, <span className="text-blue-600 font-semibold">Expertise</span>, and <span className="text-blue-600 font-semibold">Reliability</span>. Each client is assigned a dedicated account manager who understands your industry needs and provides tailored solutions. Our technical support team is available around the clock to address queries, provide guidance, and ensure seamless operations.
        </p>
      </div>
    </section>
  );
}

export default CustomerCare;

import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import MagicButton from "@/components/ui/MagicButton";
import { FaPhone } from "react-icons/fa";

export const AvailabilityCard = () => {
    return (
        <>
            {/* Availability Status */}
            <CardSpotlight>
                <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-4">
                    Availability
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 bg-[#10B981] rounded-full"
                        />
                        <span className="text-[#4B5563] dark:text-[#9CA3AF]">
                            Available for freelance projects
                        </span>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-[#0066CC]/10 to-[#4A90E2]/10 dark:from-[#0066CC]/20 dark:to-[#4A90E2]/20 rounded-xl border border-[#0066CC]/20">
                        <p className="text-sm text-[#1F2937] dark:text-white font-medium mb-2">
                            Response Time
                        </p>
                        <p className="text-[#4B5563] dark:text-[#9CA3AF] text-sm">
                            Usually responds within 24 hours
                        </p>
                    </div>
                </div>
            </CardSpotlight>

            {/* Quick Action */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] opacity-90" />
                <div className="relative p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Quick Chat</h4>
                    <p className="text-sm text-white/80 mb-4">
                        Prefer a quick call? Schedule a 15-min conversation.
                    </p>
                    <MagicButton
                        title="Schedule Call"
                        icon={<FaPhone className="scale-x-[-1]"/>}
                        position="left"
                    />
                </div>
            </motion.div>
        </>
    );
};

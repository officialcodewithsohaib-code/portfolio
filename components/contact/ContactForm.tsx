"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import {
    FaEnvelope,
    FaPaperPlane,
    FaCheckCircle,
    FaSpinner,
    FaUser,
    FaBriefcase,
    FaRegComments,
} from "react-icons/fa";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
         setErrorMessage(null);


         try {
            const response = await fetch('/api/send',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
if(!response){
    throw new Error(result.error || 'Something went wrong.Failed to send message.');
}
setIsSuccess(true);
setFormData({ name: "", email: "", subject: "", message: "" });
setTimeout(() => setIsSuccess(false), 5000);


         } catch (error) {
               console.error('Error sending email:', error);
                      setErrorMessage(
            error instanceof Error ? error.message : 'Something went wrong. Please try again.'
        );
         } finally {
        // 10. Always stop loading state (runs whether success or error)
        setIsSubmitting(false);
    }
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSuccess(false), 5000);
    };

    const formFields = [
        {
            name: "name",
            type: "text",
            placeholder: "Your Full Name",
            icon: <FaUser />,
            required: true,
        },
        {
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            icon: <FaEnvelope />,
            required: true,
        },
        {
            name: "subject",
            type: "text",
            placeholder: "Subject",
            icon: <FaBriefcase />,
            required: true,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
        >
            <CardSpotlight className="h-full">
                <h2 className="text-3xl font-bold text-[#1F2937] dark:text-white mb-2">
                    Send a Message
                </h2>
                <p className="text-[#4B5563] dark:text-[#9CA3AF] mb-8">
                    Fill out the form below and I'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Text Input Fields */}
                    {formFields.map((field, index) => (
                        <motion.div
                            key={field.name}
                            initial={isMounted ? { opacity: 0, x: -20 } : false}
                            animate={isMounted ? { opacity: 1, x: 0 } : undefined}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] dark:text-[#9CA3AF] z-10">
                                {field.icon}
                            </div>
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                placeholder={field.placeholder}
                                required={field.required}
                                className={`w-full pl-12 pr-4 py-4 bg-[#F8FAFB] dark:bg-[#374151] border-2 rounded-xl text-[#1F2937] dark:text-white placeholder-[#9CA3AF] focus:outline-none transition-all duration-300 ${focusedField === field.name
                                        ? "border-[#0066CC] dark:border-[#4A90E2] shadow-lg shadow-[#0066CC]/20"
                                        : "border-[#E4E7EB] dark:border-[#4B5563]"
                                    }`}
                            />
                            <AnimatePresence>
                                {focusedField === field.name && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066CC] to-[#4A90E2]"
                                        style={{ originX: 0 }}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* Message Textarea */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute left-4 top-4 text-[#4B5563] dark:text-[#9CA3AF] z-10">
                            <FaRegComments />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your Message"
                            required
                            rows={6}
                            className={`w-full pl-12 pr-4 py-4 bg-[#F8FAFB] dark:bg-[#374151] border-2 rounded-xl text-[#1F2937] dark:text-white placeholder-[#9CA3AF] focus:outline-none transition-all duration-300 resize-none ${focusedField === "message"
                                    ? "border-[#0066CC] dark:border-[#4A90E2] shadow-lg shadow-[#0066CC]/20"
                                    : "border-[#E4E7EB] dark:border-[#4B5563]"
                                }`}
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                            className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg cursor-pointer ${isSuccess
                                    ? "bg-gradient-to-r from-[#10B981] to-[#0066CC]"
                                    : "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] hover:shadow-2xl hover:shadow-[#0066CC]/30"
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <FaSpinner className="animate-spin" />
                                    Sending...
                                </span>
                            ) : isSuccess ? (
                                <span className="flex items-center justify-center gap-2">
                                    <FaCheckCircle />
                                    Message Sent Successfully!
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <FaPaperPlane />
                                    Send Message
                                </span>
                            )}
                        </motion.button>
                    </motion.div>
                </form>
            </CardSpotlight>
        </motion.div>
    );
};

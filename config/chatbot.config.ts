import { ChatbotConfig } from '@/types/chatbot.types';

export const chatbotConfig: ChatbotConfig = {
  // Replace with your deployed API URL
  apiUrl: process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'http://localhost:5000/api',
  
  welcomeMessage: "👋 Hi! I'm an AI assistant for this portfolio. Ask me about projects, skills, or experience!",
  
  placeholderText: "Ask about projects, skills, experience...",
  
  suggestedQuestions: [
    "What projects have you built?",
    "What are your technical skills?",
    "Tell me about your experience",
    "How can I contact you?"
  ]
};

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatbotConfig {
  apiUrl: string;
  welcomeMessage: string;
  placeholderText: string;
  suggestedQuestions: string[];
}

export interface ApiResponse {
  status: string;
  data: {
    question: string;
    answer: string;
    timestamp: string;
  };
}

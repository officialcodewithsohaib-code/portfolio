import { chatbotConfig } from '@/config/chatbot.config';
import { ApiResponse } from '@/types/chatbot.types';

export async function sendChatMessage(question: string): Promise<string> {
  try {
    const response = await fetch(`${chatbotConfig.apiUrl}/portfolio/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data.data.answer;
  } catch (error) {
    console.error('Chatbot API Error:', error);
    throw new Error('Failed to get response. Please try again later.');
  }
}

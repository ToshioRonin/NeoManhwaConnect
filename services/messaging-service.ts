import api from './api';
import type { Conversation, DirectMessage, WorkChatMessage, SendMessageInput } from '../types/chat';

export const messagingService = {
  getConversations: async (): Promise<Conversation[]> => {
    const response = await api.get('/messaging/dm/conversations');
    return response.data;
  },

  getConversation: async (conversationId: string): Promise<DirectMessage[]> => {
    const response = await api.get(`/messaging/dm/${conversationId}`);
    return response.data;
  },

  sendDirectMessage: async (userId: string, content: string): Promise<DirectMessage> => {
    const response = await api.post(`/messaging/dm/${userId}`, { content });
    return response.data;
  },

  markAsRead: async (conversationId: string): Promise<void> => {
    await api.put(`/messaging/dm/${conversationId}/read`);
  },

  getWorkChat: async (manhwaId: string): Promise<WorkChatMessage[]> => {
    const response = await api.get(`/messaging/workchat/${manhwaId}`);
    return response.data;
  },

  sendWorkChatMessage: async (manhwaId: string, content: string): Promise<WorkChatMessage> => {
    const response = await api.post(`/messaging/workchat/${manhwaId}`, { content });
    return response.data;
  },

  addWorkChatMember: async (manhwaId: string, userId: string): Promise<void> => {
    await api.post(`/messaging/workchat/${manhwaId}/members`, { userId });
  },

  removeWorkChatMember: async (manhwaId: string, userId: string): Promise<void> => {
    await api.delete(`/messaging/workchat/${manhwaId}/members/${userId}`);
  },
};
import { create } from 'zustand';
import type { Conversation, DirectMessage, WorkChatMessage } from '../types/chat';
import { messagingService } from '../services/messaging-service';

interface ChatState {
  conversations: Conversation[];
  currentConversation: DirectMessage[];
  workChats: Map<string, WorkChatMessage[]>;
  
  activeConversationId: string | null;
  activeWorkChatManhwaId: string | null;
  isLoading: boolean;
  error: string | null;

  fetchConversations: () => Promise<void>;
  fetchMessages: (conversationId: string) => Promise<void>;
  sendMessage: (userId: string, content: string) => Promise<void>;
  markAsRead: (conversationId: string) => Promise<void>;
  
  fetchWorkChat: (manhwaId: string) => Promise<void>;
  sendWorkChatMessage: (manhwaId: string, content: string) => Promise<void>;
  setActiveWorkChat: (manhwaId: string | null) => void;
  
  clearError: () => void;
}

export const useChatStore = create<ChatState>()((set, get) => ({
  conversations: [],
  currentConversation: [],
  workChats: new Map(),
  activeConversationId: null,
  activeWorkChatManhwaId: null,
  isLoading: false,
  error: null,

  fetchConversations: async () => {
    set({ isLoading: true, error: null });
    try {
      const conversations = await messagingService.getConversations();
      set({ conversations, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar conversaciones',
        isLoading: false,
      });
    }
  },

  fetchMessages: async (conversationId) => {
    set({ isLoading: true, error: null, activeConversationId: conversationId });
    try {
      const messages = await messagingService.getConversation(conversationId);
      set({ currentConversation: messages, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar mensajes',
        isLoading: false,
      });
    }
  },

  sendMessage: async (userId, content) => {
    try {
      const message = await messagingService.sendDirectMessage(userId, content);
      set((state) => ({
        currentConversation: [...state.currentConversation, message],
      }));
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al enviar mensaje',
      });
      throw error;
    }
  },

  markAsRead: async (conversationId) => {
    try {
      await messagingService.markAsRead(conversationId);
      set((state) => ({
        conversations: state.conversations.map((c) =>
          c.id === conversationId ? { ...c, unreadCount: 0 } : c
        ),
      }));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  },

  fetchWorkChat: async (manhwaId) => {
    set({ isLoading: true, error: null, activeWorkChatManhwaId: manhwaId });
    try {
      const messages = await messagingService.getWorkChat(manhwaId);
      set((state) => {
        const newWorkChats = new Map(state.workChats);
        newWorkChats.set(manhwaId, messages);
        return { workChats: newWorkChats, isLoading: false };
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar chat de obra',
        isLoading: false,
      });
    }
  },

  sendWorkChatMessage: async (manhwaId, content) => {
    try {
      const message = await messagingService.sendWorkChatMessage(manhwaId, content);
      set((state) => {
        const newWorkChats = new Map(state.workChats);
        const existingMessages = newWorkChats.get(manhwaId) || [];
        newWorkChats.set(manhwaId, [...existingMessages, message]);
        return { workChats: newWorkChats };
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al enviar mensaje',
      });
      throw error;
    }
  },

  setActiveWorkChat: (manhwaId) => {
    set({ activeWorkChatManhwaId: manhwaId });
  },

  clearError: () => set({ error: null }),
}));
import { useChatStore } from '../stores/chat-store';

export const useChat = () => {
  const {
    conversations,
    currentConversation,
    workChats,
    activeConversationId,
    activeWorkChatManhwaId,
    isLoading,
    error,
    fetchConversations,
    fetchMessages,
    sendMessage,
    markAsRead,
    fetchWorkChat,
    sendWorkChatMessage,
    setActiveWorkChat,
    clearError,
  } = useChatStore();

  return {
    conversations,
    currentConversation,
    workChats,
    activeConversationId,
    activeWorkChatManhwaId,
    isLoading,
    error,
    fetchConversations,
    fetchMessages,
    sendMessage,
    markAsRead,
    fetchWorkChat,
    sendWorkChatMessage,
    setActiveWorkChat,
    clearError,
  };
};

export const useDirectMessages = () => {
  const {
    conversations,
    currentConversation,
    activeConversationId,
    isLoading,
    error,
    fetchConversations,
    fetchMessages,
    sendMessage,
    markAsRead,
  } = useChatStore();

  return {
    conversations,
    messages: currentConversation,
    activeConversationId,
    isLoading,
    error,
    fetchConversations,
    fetchMessages,
    sendMessage,
    markAsRead,
  };
};
export interface Conversation {
  id: string;
  participantId: string;
  participantUsername: string;
  participantAvatar?: string;
  lastMessage?: string;
  lastMessageAt?: string;
  unreadCount: number;
}

export interface DirectMessage {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
  isRead: boolean;
}

export interface WorkChatMessage {
  id: string;
  manhwaId: string;
  senderId: string;
  senderUsername: string;
  senderAvatar?: string;
  content: string;
  createdAt: string;
}

export interface WorkChat {
  manhwaId: string;
  manhwaTitle: string;
  messages: WorkChatMessage[];
  members: string[];
}

export interface SendMessageInput {
  content: string;
  recipientId?: string;
  manhwaId?: string;
}
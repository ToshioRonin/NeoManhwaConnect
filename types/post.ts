export type ReactionType = 'LIKE' | 'LOVE' | 'WOW' | 'HYPE';

export interface Post {
  id: string;
  authorId: string;
  authorUsername: string;
  authorAvatar?: string;
  authorRole: string;
  content: string;
  mediaUrls: string[];
  manhwaRef?: string;
  reactions: Reaction[];
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Reaction {
  userId: string;
  type: ReactionType;
}

export interface Comment {
  id: string;
  userId: string;
  userUsername: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
}

export interface CreatePostInput {
  content: string;
  mediaUrls?: string[];
  manhwaRef?: string;
}

export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: string;
}
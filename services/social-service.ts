import api from './api';
import type { Post, CreatePostInput, ReactionType } from '../types/post';

export const socialService = {
  getFeed: async (): Promise<Post[]> => {
    const response = await api.get('/social/feed');
    return response.data;
  },

  getPosts: async (page = 1, limit = 20): Promise<{ data: Post[]; total: number }> => {
    const response = await api.get('/social/posts', { params: { page, limit } });
    return response.data;
  },

  getPostById: async (id: string): Promise<Post> => {
    const response = await api.get(`/social/posts/${id}`);
    return response.data;
  },

  createPost: async (data: CreatePostInput): Promise<Post> => {
    const response = await api.post('/social/posts', data);
    return response.data;
  },

  updatePost: async (id: string, data: Partial<CreatePostInput>): Promise<Post> => {
    const response = await api.put(`/social/posts/${id}`, data);
    return response.data;
  },

  deletePost: async (id: string): Promise<void> => {
    await api.delete(`/social/posts/${id}`);
  },

  reactToPost: async (postId: string, type: ReactionType): Promise<void> => {
    await api.post(`/social/posts/${postId}/react`, { type });
  },

  getComments: async (postId: string): Promise<any[]> => {
    const response = await api.get(`/social/posts/${postId}/comments`);
    return response.data;
  },

  addComment: async (postId: string, content: string): Promise<any> => {
    const response = await api.post(`/social/posts/${postId}/comments`, { content });
    return response.data;
  },

  deleteComment: async (postId: string, commentId: string): Promise<void> => {
    await api.delete(`/social/posts/${postId}/comments/${commentId}`);
  },

  follow: async (targetId: string): Promise<void> => {
    await api.post(`/social/follow/${targetId}`);
  },

  unfollow: async (targetId: string): Promise<void> => {
    await api.delete(`/social/follow/${targetId}`);
  },

  getFollowing: async (): Promise<string[]> => {
    const response = await api.get('/social/follow/following');
    return response.data;
  },

  getFollowers: async (userId: string): Promise<string[]> => {
    const response = await api.get(`/social/follow/followers/${userId}`);
    return response.data;
  },

  isFollowing: async (targetId: string): Promise<boolean> => {
    const response = await api.get(`/social/follow/check/${targetId}`);
    return response.data.isFollowing;
  },
};
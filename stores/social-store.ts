import { create } from 'zustand';
import type { Post, CreatePostInput, ReactionType } from '../types/post';
import { socialService } from '../services/social-service';

interface SocialState {
  feed: Post[];
  posts: Post[];
  following: string[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  currentPage: number;

  fetchFeed: () => Promise<void>;
  fetchPosts: (page?: number) => Promise<void>;
  createPost: (data: CreatePostInput) => Promise<Post>;
  updatePost: (id: string, data: Partial<CreatePostInput>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  reactToPost: (postId: string, type: ReactionType) => Promise<void>;
  fetchFollowing: () => Promise<void>;
  toggleFollow: (targetId: string) => Promise<void>;
  isFollowing: (targetId: string) => boolean;
  clearFeed: () => void;
  clearError: () => void;
}

export const useSocialStore = create<SocialState>()((set, get) => ({
  feed: [],
  posts: [],
  following: [],
  isLoading: false,
  error: null,
  hasMore: true,
  currentPage: 1,

  fetchFeed: async () => {
    set({ isLoading: true, error: null });
    try {
      const feed = await socialService.getFeed();
      set({ feed, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar feed',
        isLoading: false,
      });
    }
  },

  fetchPosts: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await socialService.getPosts(page);
      set((state) => ({
        posts: page === 1 ? response.data : [...state.posts, ...response.data],
        hasMore: response.data.length === 20,
        currentPage: page,
        isLoading: false,
      }));
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar posts',
        isLoading: false,
      });
    }
  },

  createPost: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const post = await socialService.createPost(data);
      set((state) => ({
        posts: [post, ...state.posts],
        feed: [post, ...state.feed],
        isLoading: false,
      }));
      return post;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al crear post',
        isLoading: false,
      });
      throw error;
    }
  },

  updatePost: async (id, data) => {
    try {
      const updated = await socialService.updatePost(id, data);
      set((state) => ({
        posts: state.posts.map((p) => (p.id === id ? updated : p)),
        feed: state.feed.map((p) => (p.id === id ? updated : p)),
      }));
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al actualizar post',
      });
      throw error;
    }
  },

  deletePost: async (id) => {
    try {
      await socialService.deletePost(id);
      set((state) => ({
        posts: state.posts.filter((p) => p.id !== id),
        feed: state.feed.filter((p) => p.id !== id),
      }));
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al eliminar post',
      });
      throw error;
    }
  },

  reactToPost: async (postId, type) => {
    try {
      await socialService.reactToPost(postId, type);
      const userId = get().feed[0]?.authorId;
      const updateReactions = (post: Post): Post => {
        if (post.id !== postId) return post;
        const existingReaction = post.reactions.find((r) => r.userId === userId);
        let newReactions;
        if (existingReaction) {
          newReactions = post.reactions.map((r) =>
            r.userId === userId ? { ...r, type } : r
          );
        } else {
          newReactions = [...post.reactions, { userId: userId!, type }];
        }
        return { ...post, reactions: newReactions };
      };
      set((state) => ({
        feed: state.feed.map(updateReactions),
        posts: state.posts.map(updateReactions),
      }));
    } catch (error) {
      console.error('Error reacting to post:', error);
    }
  },

  fetchFollowing: async () => {
    try {
      const following = await socialService.getFollowing();
      set({ following });
    } catch (error) {
      console.error('Error fetching following:', error);
    }
  },

  toggleFollow: async (targetId) => {
    const { following } = get();
    const isFollowing = following.includes(targetId);
    try {
      if (isFollowing) {
        await socialService.unfollow(targetId);
        set({ following: following.filter((id) => id !== targetId) });
      } else {
        await socialService.follow(targetId);
        set({ following: [...following, targetId] });
      }
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al seguir/dejar de seguir',
      });
      throw error;
    }
  },

  isFollowing: (targetId) => get().following.includes(targetId),

  clearFeed: () => set({ feed: [], posts: [], currentPage: 1, hasMore: true }),

  clearError: () => set({ error: null }),
}));
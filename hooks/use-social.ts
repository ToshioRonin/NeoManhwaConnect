import { useSocialStore } from '../stores/social-store';
import type { ReactionType } from '../types/post';

export const useSocial = () => {
  const {
    feed,
    posts,
    following,
    isLoading,
    error,
    hasMore,
    currentPage,
    fetchFeed,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    reactToPost,
    fetchFollowing,
    toggleFollow,
    isFollowing,
    clearFeed,
    clearError,
  } = useSocialStore();

  return {
    feed,
    posts,
    following,
    isLoading,
    error,
    hasMore,
    currentPage,
    fetchFeed,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    reactToPost: (postId: string, type: ReactionType) => reactToPost(postId, type),
    fetchFollowing,
    toggleFollow,
    isFollowing,
    clearFeed,
    clearError,
  };
};

export const useFeed = () => {
  const { feed, isLoading, error, fetchFeed } = useSocialStore();
  return { feed, isLoading, error, fetchFeed };
};

export const useFollow = () => {
  const { following, isFollowing, toggleFollow, fetchFollowing } = useSocialStore();
  return { following, isFollowing, toggleFollow, fetchFollowing };
};
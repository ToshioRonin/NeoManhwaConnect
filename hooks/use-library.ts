import { useLibraryStore } from '../stores/library-store';
import type { ManhwaFilters } from '../types/manhwa';

export const useLibrary = () => {
  const {
    manhwas,
    currentManhwa,
    chapters,
    currentChapter,
    tags,
    genres,
    isLoading,
    error,
    total,
    page,
    totalPages,
    fetchManhwas,
    fetchManhwaById,
    fetchChapters,
    fetchChapter,
    fetchTags,
    fetchGenres,
    searchManhwas,
    clearCurrentManhwa,
    clearError,
  } = useLibraryStore();

  return {
    manhwas,
    currentManhwa,
    chapters,
    currentChapter,
    tags,
    genres,
    isLoading,
    error,
    total,
    page,
    totalPages,
    fetchManhwas: (filters?: ManhwaFilters) => fetchManhwas(filters),
    fetchManhwaById,
    fetchChapters,
    fetchChapter,
    fetchTags,
    fetchGenres,
    searchManhwas,
    clearCurrentManhwa,
    clearError,
  };
};

export const useManhwa = () => {
  const { currentManhwa, chapters, isLoading, error, fetchManhwaById, fetchChapters, clearCurrentManhwa } = useLibraryStore();
  return { currentManhwa, chapters, isLoading, error, fetchManhwaById, fetchChapters, clearCurrentManhwa };
};

export const useChapter = () => {
  const { currentChapter, isLoading, error, fetchChapter } = useLibraryStore();
  return { currentChapter, isLoading, error, fetchChapter };
};
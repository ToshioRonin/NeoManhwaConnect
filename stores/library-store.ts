import { create } from 'zustand';
import type { Manhwa, ManhwaFilters } from '../types/manhwa';
import type { Chapter } from '../types/chapter';
import { libraryService } from '../services/library-service';

interface LibraryState {
  manhwas: Manhwa[];
  currentManhwa: Manhwa | null;
  chapters: Chapter[];
  currentChapter: Chapter | null;
  tags: string[];
  genres: string[];
  
  isLoading: boolean;
  error: string | null;
  total: number;
  page: number;
  totalPages: number;

  fetchManhwas: (filters?: ManhwaFilters) => Promise<void>;
  fetchManhwaById: (id: string) => Promise<void>;
  fetchChapters: (manhwaId: string) => Promise<void>;
  fetchChapter: (manhwaId: string, chapterNumber: number) => Promise<void>;
  fetchTags: () => Promise<void>;
  fetchGenres: () => Promise<void>;
  searchManhwas: (query: string) => Promise<Manhwa[]>;
  clearCurrentManhwa: () => void;
  clearError: () => void;
}

export const useLibraryStore = create<LibraryState>()((set, get) => ({
  manhwas: [],
  currentManhwa: null,
  chapters: [],
  currentChapter: null,
  tags: [],
  genres: [],
  isLoading: false,
  error: null,
  total: 0,
  page: 1,
  totalPages: 0,

  fetchManhwas: async (filters) => {
    set({ isLoading: true, error: null });
    try {
      const response = await libraryService.getManhwas(filters);
      set({
        manhwas: response.data,
        total: response.total,
        page: response.page,
        totalPages: response.totalPages,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar obras',
        isLoading: false,
      });
    }
  },

  fetchManhwaById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const manhwa = await libraryService.getManhwaById(id);
      set({ currentManhwa: manhwa, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar obra',
        isLoading: false,
      });
    }
  },

  fetchChapters: async (manhwaId) => {
    set({ isLoading: true, error: null });
    try {
      const chapters = await libraryService.getChapters(manhwaId);
      set({ chapters, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar capítulos',
        isLoading: false,
      });
    }
  },

  fetchChapter: async (manhwaId, chapterNumber) => {
    set({ isLoading: true, error: null });
    try {
      const chapter = await libraryService.getChapter(manhwaId, chapterNumber);
      set({ currentChapter: chapter, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar capítulo',
        isLoading: false,
      });
    }
  },

  fetchTags: async () => {
    try {
      const tags = await libraryService.getTags();
      set({ tags });
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  },

  fetchGenres: async () => {
    try {
      const genres = await libraryService.getGenres();
      set({ genres });
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  },

  searchManhwas: async (query) => {
    try {
      return await libraryService.searchManhwas(query);
    } catch (error) {
      console.error('Error searching manhwas:', error);
      return [];
    }
  },

  clearCurrentManhwa: () => {
    set({ currentManhwa: null, chapters: [], currentChapter: null });
  },

  clearError: () => set({ error: null }),
}));
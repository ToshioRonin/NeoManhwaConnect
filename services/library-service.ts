import api from './api';
import type { Manhwa, ManhwaFilters, PaginatedResponse } from '../types/manhwa';
import type { Chapter, ChapterAccess } from '../types/chapter';

export const libraryService = {
  getManhwas: async (filters?: ManhwaFilters): Promise<PaginatedResponse<Manhwa>> => {
    const response = await api.get('/library/manhwa', { params: filters });
    return response.data;
  },

  getManhwaById: async (id: string): Promise<Manhwa> => {
    const response = await api.get(`/library/manhwa/${id}`);
    return response.data;
  },

  getChapters: async (manhwaId: string): Promise<Chapter[]> => {
    const response = await api.get(`/library/manhwa/${manhwaId}/chapters`);
    return response.data;
  },

  getChapter: async (manhwaId: string, chapterNumber: number): Promise<Chapter> => {
    const response = await api.get(`/library/manhwa/${manhwaId}/chapters/${chapterNumber}`);
    return response.data;
  },

  checkChapterAccess: async (manhwaId: string, chapterNumber: number): Promise<ChapterAccess> => {
    const response = await api.get(`/library/manhwa/${manhwaId}/chapters/${chapterNumber}/access`);
    return response.data;
  },

  createManhwa: async (data: Partial<Manhwa>): Promise<Manhwa> => {
    const response = await api.post('/library/manhwa', data);
    return response.data;
  },

  updateManhwa: async (id: string, data: Partial<Manhwa>): Promise<Manhwa> => {
    const response = await api.put(`/library/manhwa/${id}`, data);
    return response.data;
  },

  deleteManhwa: async (id: string): Promise<void> => {
    await api.delete(`/library/manhwa/${id}`);
  },

  createChapter: async (manhwaId: string, data: Partial<Chapter>): Promise<Chapter> => {
    const response = await api.post(`/library/manhwa/${manhwaId}/chapters`, data);
    return response.data;
  },

  getTags: async (): Promise<string[]> => {
    const response = await api.get('/library/tags');
    return response.data;
  },

  getGenres: async (): Promise<string[]> => {
    const response = await api.get('/library/genres');
    return response.data;
  },

  searchManhwas: async (query: string): Promise<Manhwa[]> => {
    const response = await api.get('/library/manhwa/search', { params: { q: query } });
    return response.data;
  },
};
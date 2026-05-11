export type ManhwaStatus = 'ONGOING' | 'COMPLETED' | 'HIATUS' | 'CANCELLED';

export interface Manhwa {
  id: string;
  title: string;
  altTitles: string[];
  description: string;
  coverUrl: string;
  status: ManhwaStatus;
  originLang: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  authors: string[];
  artists: string[];
  scans: string[];
  genres: string[];
  tags: string[];
  chaptersCount?: number;
}

export interface ManhwaFilters {
  search?: string;
  status?: ManhwaStatus;
  genre?: string;
  tag?: string;
  originLang?: string;
  page?: number;
  limit?: number;
  sortBy?: 'title' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
export interface Chapter {
  id: string;
  manhwaId: string;
  number: number;
  title?: string;
  isEarlyAccess: boolean;
  releaseDate: string;
  createdAt: string;
  pages?: Page[];
}

export interface Page {
  id: string;
  chapterId: string;
  pageNumber: number;
  imageUrl: string;
}

export interface ChapterAccess {
  hasAccess: boolean;
  reason?: string;
  requiresCoins?: number;
}
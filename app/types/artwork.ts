export interface ArtworkItem {
  id: number;
  title: string;
  artist: string;
  category: string;
  imageUrl: string;
  description: string;
  year: number;
  dimensions?: string;
}

export interface Category {
  name: string;
  count: number;
}


export interface Artist {
  name: string;
  specialty: { en: string; id: string };
  bio: { en: string; id: string };
  photo: string;
  whatsapp: string;
}

export interface GalleryImage {
  title: { en: string; id: string };
  url: string;
  alt: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  caption: { en: string; id: string };
}

export type Language = 'en' | 'id';

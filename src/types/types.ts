export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_big: string;
  cover_medium: string;
  cover_xl: string;
  tracklist: string;
  type: string;
}

export interface EnumSongItem {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  type: string;
  album: Album;
}

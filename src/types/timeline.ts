export type TimelineCategory = 'cultural' | 'political' | 'social' | 'economic';

export interface TimelineEventType {
  year: string;
  title: string;
  description: string;
  category: TimelineCategory;
  media?: {
    type: 'image' | 'video';
    url: string;
    source?: string;
  };
  source?: string;
  source_desc?: string;
}
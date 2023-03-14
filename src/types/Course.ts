export interface Course {
  id: string;
  title: string;
  tags: Array<string>;
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: Meta;
  courseVideoPreview: Preview;
}

interface Meta {
  slug: string;
  skills: Array<string>;
}

interface Preview {
  link: string;
  duration: number;
  previewImageLink: string;
}

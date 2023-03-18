export interface Course {
  id: string;
  title: string;
  tags: Array<string>;
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount?: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: Meta;
  courseVideoPreview?: Preview;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta: null;
}

interface Meta {
  slug: string;
  skills: Array<string>;
  courseVideoPreview?: Preview;
}

interface Preview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export interface LessonError {
  message: string;
  lessonId: string;
}

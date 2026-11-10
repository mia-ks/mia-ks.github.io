export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string;
  source?: string;
};

export const projects: Project[] = [
  {
    slug: 'inky-sudoku',
    title: 'Inky Sudoku',
    description: '',
    details: 'Offline Sudoku · iOS 15+ · v1.0.13',
  },
  {
    slug: 'inky-blocks',
    title: 'Inky Blocks',
    description: '',
    details: 'Offline block puzzle · iOS 15+ · v2.0.3',
  },
  {
    slug: 'pypeg',
    title: 'pypeg',
    description: 'A friendly ffmpeg wrapper for squeezing video down to size, made as an alternative to 8mb.video.',
    details: 'Python, ffmpeg',
  },
  {
    slug: 'metropod',
    title: 'metropod',
    description: 'An iPod-style interface built on top of Metrolist.',
    details: 'Kotlin · Android',
    source: 'https://github.com/mia-ks/Metropod',
  },
];

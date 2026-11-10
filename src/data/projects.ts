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
    source: 'https://github.com/Vahvl/comprustor',
    description: 'A Python ffmpeg TUI for cutting and compressing clips. Rust rewrite in progress.',
    details: 'Python, ffmpeg',
  },
  {
    slug: 'metropod',
    title: 'metropod',
    description: 'An iPod-style interface built on top of Metrolist.',
    details: '',
    source: 'https://github.com/mia-ks/Metropod',
  },
];

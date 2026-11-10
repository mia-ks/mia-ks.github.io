export type Project = { slug: string; title: string; description: string; stack: string; };

export const projects: Project[] = [
  { slug: 'pypeg', title: 'pypeg', description: 'A friendly ffmpeg wrapper for squeezing video down to size, made as an alternative to 8mb.video.', stack: 'Python, ffmpeg' },
  { slug: 'metropod', title: 'metropod', description: 'An iPod-style interface built on top of Metrolist.', stack: 'UI, music player' },
  { slug: 'olympiad-programming', title: 'Olympiad programming', description: 'Competitive programming in Python, where the constraints are the fun part.', stack: 'Python, algorithms' },
  { slug: 'minecraft-mods', title: 'Minecraft mods', description: 'Occasional contributions to Minecraft mods.', stack: 'Open source, Minecraft' },
];

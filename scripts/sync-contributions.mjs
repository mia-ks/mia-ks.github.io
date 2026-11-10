import { writeFile, access } from 'node:fs/promises';
const file = new URL('../src/data/contributions.json', import.meta.url);
try {
  const response = await fetch('https://github.com/users/mia-ks/contributions', { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  const html = await response.text();
  const tooltips = new Map([...html.matchAll(/<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g)].map(([, id, text]) => [id, text.trim()]));
  const days = [...html.matchAll(/<td\b[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*data-level="([0-4])"[^>]*>/g)].map(([, date, id, level]) => {
    const label = tooltips.get(id) ?? '';
    const count = Number(label.match(/^([\d,]+) contributions?/)?.[1]?.replaceAll(',', '') ?? 0);
    return { date, level: Number(level), count };
  }).sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 350) throw new Error('GitHub returned an incomplete calendar');
  await writeFile(file, JSON.stringify({ total: days.reduce((sum, day) => sum + day.count, 0), days }, null, 2) + '\n');
  console.log(`Updated GitHub calendar: ${days.length} days`);
} catch (error) {
  await access(file);
  console.warn(`Using saved GitHub calendar: ${error.message}`);
}

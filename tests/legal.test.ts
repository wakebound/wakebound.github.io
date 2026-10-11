import { describe, expect, it } from 'vitest';

const files = import.meta.glob<string>('../src/content/legal/*/*.md', { query: '?raw', import: 'default', eager: true });
const read = (locale: string, name: string): string => files[`../src/content/legal/${locale}/${name}.md`]!;

describe.each(['privacy', 'terms'])('%s', (name) => {
  const en = read('en', name);
  const ptBr = read('pt-br', name);

  it('carries a title and the update date in both languages', () => {
    for (const text of [en, ptBr]) {
      expect(text).toMatch(/^---\ntitle: .+\nupdated: '2026-10-10'\n---\n/);
    }
  });

  it('has the same sections and the same owner placeholders in both languages', () => {
    const headings = (text: string): number => (text.match(/^## /gm) ?? []).length;
    const todos = (text: string): number => (text.match(/TODO\(owner\)/g) ?? []).length;
    expect(headings(ptBr)).toBe(headings(en));
    expect(todos(ptBr)).toBe(todos(en));
  });
});

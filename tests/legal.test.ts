import { describe, expect, it } from 'vitest';

const files = import.meta.glob<string>('../src/content/legal/*/*.md', { query: '?raw', import: 'default', eager: true });
const read = (locale: string, name: string): string => files[`../src/content/legal/${locale}/${name}.md`]!;

describe.each(['privacy', 'terms'])('%s', (name) => {
  const en = read('en', name);
  const ptBr = read('pt-br', name);

  it('carries a title and the same update date in both languages', () => {
    const updated = (text: string): string | undefined => text.match(/^---\ntitle: .+\nupdated: '(\d{4}-\d{2}-\d{2})'\n---\n/)?.[1];
    expect(updated(en)).toBeDefined();
    expect(updated(ptBr)).toBe(updated(en));
  });

  it('has the same sections in both languages', () => {
    const headings = (text: string): number => (text.match(/^## /gm) ?? []).length;
    expect(headings(ptBr)).toBe(headings(en));
  });

  it('has no unresolved TODO markers', () => {
    expect(en).not.toContain('TODO(');
    expect(ptBr).not.toContain('TODO(');
  });
});

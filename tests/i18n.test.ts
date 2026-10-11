import { describe, expect, it } from 'vitest';
import en from '../src/i18n/en.json';
import ptBr from '../src/i18n/pt-br.json';
import { t } from '../src/i18n/t.ts';

const placeholders = (text: string): string[] => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]!).sort();

describe('i18n', () => {
  it('has the same keys in both locales', () => {
    expect(Object.keys(ptBr).sort()).toEqual(Object.keys(en).sort());
  });
  it('has the same placeholders per key', () => {
    for (const key of Object.keys(en) as (keyof typeof en)[]) expect(placeholders(ptBr[key]), key).toEqual(placeholders(en[key]));
  });
  it('fills placeholders', () => {
    expect(t('en', 'lever.provoke', { cut: 40, hours: 3 })).toBe("Boss counter-attack 40% weaker for 3 h.");
  });
});

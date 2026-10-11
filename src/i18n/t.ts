import en from './en.json';
import ptBr from './pt-br.json';

export type Locale = 'en' | 'pt-br';
export type Key = keyof typeof en;
const STRINGS: Record<Locale, Record<Key, string>> = { en, 'pt-br': ptBr };

export function t(locale: Locale, key: Key, vars: Record<string, string | number> = {}): string {
  return STRINGS[locale][key].replace(/\{(\w+)\}/g, (_match, name: string) => String(vars[name] ?? `{${name}}`));
}

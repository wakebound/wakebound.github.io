import { describe, expect, it } from 'vitest';
import items from '../src/data/items.json';
import portals from '../src/data/portals.json';

describe('exported data', () => {
  it('has rows for both locales', () => {
    expect(portals.en.length).toBeGreaterThan(0);
    expect(portals['pt-br'].length).toBeGreaterThan(0);
    expect(items.en.length).toBeGreaterThan(0);
  });
});

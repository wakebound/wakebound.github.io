import { describe, expect, it } from 'vitest';
import { BOT_INVITE } from '../src/components/links.ts';

const DISCORD_PERMISSION_BITS = {
  viewChannel: 1024,
  sendMessages: 2048,
  embedLinks: 16384,
  attachFiles: 32768,
  readMessageHistory: 65536,
};

describe('bot invite', () => {
  it('asks for exactly the five permissions the copy lists, Attach Files included', () => {
    const requested = Number(new URL(BOT_INVITE).searchParams.get('permissions'));
    const expected = Object.values(DISCORD_PERMISSION_BITS).reduce((sum, bit) => sum + bit, 0);
    expect(requested).toBe(expected);
    expect(requested).toBe(117760);
  });
});

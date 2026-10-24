import assert from 'node:assert/strict';
import test from 'node:test';
import { readPreference } from '../src/hooks/usePersistentPreference.js';

test('invalid saved preferences cannot select an unsupported language or theme', () => {
  const previousWindow = globalThis.window;
  globalThis.window = { localStorage: { getItem: () => 'unsupported' } };
  try {
    assert.equal(readPreference('portfolio-language', ['en', 'tr'], 'en'), 'en');
    assert.equal(readPreference('portfolio-theme', ['light', 'dark'], 'light'), 'light');
  } finally {
    globalThis.window = previousWindow;
  }
});

test('blocked browser storage still gives a usable preference', () => {
  const previousWindow = globalThis.window;
  globalThis.window = {
    get localStorage() {
      throw new Error('blocked');
    },
  };
  try {
    assert.equal(readPreference('portfolio-language', ['en', 'tr'], 'en'), 'en');
  } finally {
    globalThis.window = previousWindow;
  }
});

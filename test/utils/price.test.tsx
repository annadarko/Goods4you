import { afterEach, describe, expect, test, vi } from 'vitest';
import { calcDiscounted } from '../../src/utils/price';

describe('calcDiscounted', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('returns discounted price for integer values', () => {
    expect(calcDiscounted(100, 10)).toBe(90);
  });

  test('returns the same price when discount is 0%', () => {
    expect(calcDiscounted(249.5, 0)).toBe(249.5);
  });

  test('returns 0 when discount is 100%', () => {
    expect(calcDiscounted(250, 100)).toBe(0);
  });

  test('rounds result to 2 decimal places', () => {
    expect(calcDiscounted(99.99, 15)).toBe(84.99);
  });

  test('uses toFixed(2) internally', () => {
    const toFixedSpy = vi.spyOn(Number.prototype, 'toFixed');

    calcDiscounted(123.456, 12.5);

    expect(toFixedSpy).toHaveBeenCalledWith(2);
  });
});

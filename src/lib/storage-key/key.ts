/**
 *
 * @param key
 * @param prefix
 * @returns
 */
export function makeOptionallyPrefixedKey(key: string, prefix?: string) {
  if (!prefix) return key;

  return prefix ? `${prefix}_${key}` : key;
}

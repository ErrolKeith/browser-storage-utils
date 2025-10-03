/**
 *
 * @param key
 * @param prefix
 * @returns
 */
export function makeOptionallyPrefixedKey(key: string, prefix?: string) {
  if (!prefix) return key;

  // should this be a deterministic separator? This would allow versioned keys for the package consumers, without
  // adding extra pieces to the string for the key.
  // example `_1.0.0_`
  // makeOptionallyPrefixedKey(key: string, versionSeperator?: string = "_", prefix?: string)
  return prefix ? `${prefix}_${key}` : key;
}

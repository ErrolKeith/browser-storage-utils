export interface StorageConfiguration {
  keyPrefix?: string;
}

export interface LocalStorageConfiguration extends StorageConfiguration {
  type: "local-storage";
}

export interface SessionStorageConfiguration extends StorageConfiguration {
  type: "session-storage";
}

export interface CookiesConfiguration extends StorageConfiguration {
  type: "cookies";
  expiryDays?: number;
}

/**
 * A discriminated union type representing all possible browser storage configurations.
 * {@link LocalStorageConfiguration}, {@link SessionStorageConfiguration}, and {@link CookiesConfiguration}
 */
export type BrowserStorageConfiguration =
  | LocalStorageConfiguration
  | SessionStorageConfiguration
  | CookiesConfiguration;

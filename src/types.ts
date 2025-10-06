export interface BrowserStorage {
  getItem: (key: string) => string | undefined;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
  setItemIfNotSet: (key: string, value: string) => void;
}

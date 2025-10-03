import { z } from "zod";

const localStorageConfigSchema = z.object({
  type: z.literal("local-storage"),
  keyPrefix: z.string().optional(),
});

const sessionStorageConfigSchema = z.object({
  type: z.literal("session-storage"),
  keyPrefix: z.string().optional(),
});

const cookieConfigSchema = z.object({
  type: z.literal("cookies"),
  keyPrefix: z.string().optional(),
  expiryDays: z.number().optional(),
});

const browserStorageConfigSchema = z.discriminatedUnion("type", [
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
]);

export {
  browserStorageConfigSchema,
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
};
export type BrowserStorageConfig = z.infer<typeof browserStorageConfigSchema>;
export type LocalStorageConfig = z.infer<typeof localStorageConfigSchema>;
export type SessionStorageConfig = z.infer<typeof sessionStorageConfigSchema>;
export type CookiesConfig = z.infer<typeof cookieConfigSchema>;

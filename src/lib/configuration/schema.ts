import { z } from "zod";

const localStorageConfigSchema = z.object({
  type: z.literal("local-storage"),
  keyPrefix: z.string().optional(),
});

const sessionStorageConfigSchema = z.object({
  type: z.literal("session-storage"),
  keyPrefix: z.string().optional(),
});

const cookieOptionsSchema = z.object({ expires: z.number().optional() });

const cookieConfigSchema = z.object({
  type: z.literal("cookies"),
  keyPrefix: z.string().optional(),
  cookieOptions: cookieOptionsSchema.optional(),
});

const browserStorageConfigSchema = z.discriminatedUnion("type", [
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
]);

type BrowserStorageConfiguration = z.infer<typeof browserStorageConfigSchema>;
type LocalStorageConfiguration = z.infer<typeof localStorageConfigSchema>;
type SessionStorageConfiguration = z.infer<typeof sessionStorageConfigSchema>;
type CookiesConfiguration = z.infer<typeof cookieConfigSchema>;

export {
  browserStorageConfigSchema,
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
};
export type {
  BrowserStorageConfiguration,
  LocalStorageConfiguration,
  SessionStorageConfiguration,
  CookiesConfiguration,
};

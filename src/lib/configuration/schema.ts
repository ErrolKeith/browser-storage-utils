import { z } from "zod";

const baseStorageOptionsSchema = z.object({
  keyPrefix: z.string().optional(),
});

const localStorageOptionsSchema = baseStorageOptionsSchema.optional();
const localStorageConfigSchema = z.object({
  type: z.literal("local-storage"),
  options: localStorageOptionsSchema,
});

const sessionStorageOptionsSchema = baseStorageOptionsSchema.optional();
const sessionStorageConfigSchema = z.object({
  type: z.literal("session-storage"),
  options: sessionStorageOptionsSchema,
});

const cookieStorageOptionsSchema = baseStorageOptionsSchema.extend({
  expires: z.number().optional(),
});
const cookieConfigSchema = z.object({
  type: z.literal("cookies"),
  options: cookieStorageOptionsSchema.optional(),
});

const browserStorageConfigSchema = z.discriminatedUnion("type", [
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
]);

export type BaseStorageOptions = z.infer<typeof baseStorageOptionsSchema>;
export type BrowserStorageConfiguration = z.infer<
  typeof browserStorageConfigSchema
>;
export type LocalStorageOptions = z.infer<typeof localStorageOptionsSchema>;
export type LocalStorageConfiguration = z.infer<
  typeof localStorageConfigSchema
>;
export type SessionStorageOptions = z.infer<typeof sessionStorageOptionsSchema>;
export type SessionStorageConfiguration = z.infer<
  typeof sessionStorageConfigSchema
>;
export type CookieStorageOptions = z.infer<typeof cookieStorageOptionsSchema>;
export type CookiesConfiguration = z.infer<typeof cookieConfigSchema>;

export {
  browserStorageConfigSchema,
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
};

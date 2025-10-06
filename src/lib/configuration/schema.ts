import { z } from "zod";

export const baseStorageOptionsSchema = z.object({
  keyPrefix: z.string().optional(),
});

export const localStorageOptionsSchema = baseStorageOptionsSchema.optional();
export const localStorageConfigSchema = z.object({
  type: z.literal("local-storage"),
  options: localStorageOptionsSchema,
});

export const sessionStorageOptionsSchema = baseStorageOptionsSchema.optional();
export const sessionStorageConfigSchema = z.object({
  type: z.literal("session-storage"),
  options: sessionStorageOptionsSchema,
});

export const cookieStorageOptionsSchema = baseStorageOptionsSchema.extend({
  expires: z.number().optional(),
});
export const cookieConfigSchema = z.object({
  type: z.literal("cookies"),
  options: cookieStorageOptionsSchema.optional(),
});

export const browserStorageConfigSchema = z.discriminatedUnion("type", [
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

import type { ComponentParameter, ComponentProps } from "@uniformdev/next-app-router/component";

/** Text parameters keyed by id; always optional because Uniform may omit empty values. */
export type TextParams<K extends string> = { [P in K]?: ComponentParameter<string> };
export type UniformProps<K extends string, S extends string = never> = ComponentProps<TextParams<K>, S>;

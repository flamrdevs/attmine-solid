import type { VariantsOf } from "@klass/core";
import { reklass } from "./utils.ts";

const conditions = [
  {
    __: "",
    sm: "sm:",
    md: "md:",
    lg: "lg:",
    xl: "xl:",
  },
  "__",
] as [{ __: string; sm: string; md: string; lg: string; xl: string }, "__"];

export type MarginVariants = VariantsOf<typeof marginVariants>;

const spacing = (type: string) => ({
  xs: `${type}-1`,
  sm: `${type}-2`,
  md: `${type}-3`,
  lg: `${type}-5`,
  xl: `${type}-8`,
});

export const marginVariants = reklass({
  conditions,
  variants: {
    m: spacing("m"),
    mx: spacing("mx"),
    my: spacing("my"),
    mt: spacing("mt"),
    mr: spacing("mr"),
    mb: spacing("mb"),
    ml: spacing("ml"),
  },
});

export type PaddingVariants = VariantsOf<typeof paddingVariants>;

export const paddingVariants = reklass({
  conditions,
  variants: {
    p: spacing("p"),
    px: spacing("px"),
    py: spacing("py"),
    pt: spacing("pt"),
    pr: spacing("pr"),
    pb: spacing("pb"),
    pl: spacing("pl"),
  },
});

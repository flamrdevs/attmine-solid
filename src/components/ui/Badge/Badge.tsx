import type { VariantsOf } from "@klass/core";
import { klass, klassed } from "./../utils.ts";

export type BadgeVariants = VariantsOf<typeof badgeVariants>;

export const badgeVariants = klass({
  base: ["inline-flex items-center justify-center gap-1 select-none", "border"],
  variants: {
    color: {
      neutral: "bg-neutral-3 text-neutral-11 border-neutral-6",
      primary: "bg-primary-3 text-primary-11 border-primary-6",
    },
    size: {
      sm: "px-1.5 h-4 text-xs font-normal rounded",
      md: "px-2 h-5 text-sm font-normal rounded",
      lg: "px-2.5 h-6 text-sm font-medium rounded-md",
    },
  },
  defaults: {
    color: "neutral",
    size: "md",
  },
});

export const Badge = klassed("span", badgeVariants);

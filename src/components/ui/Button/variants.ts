import type { VariantsOf } from "@klass/core";
import { klass } from "./../utils.ts";

export type BaseButtonVariants = VariantsOf<typeof baseButtonVariants>;

export const baseButtonVariants = klass({
  base: [
    "inline-flex items-center justify-center gap-2 outline-none",
    "border",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-90 disabled:pointer-events-none",
  ],
  variants: {
    color: {
      neutral: [
        "bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5 text-neutral-11",
        "border-neutral-6",
        "focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1",
        "disabled:bg-neutral-4 disabled:text-neutral-8 disabled:border-neutral-5",
      ],
      primary: [
        "bg-primary-3 hover:bg-primary-4 active:bg-primary-5 text-primary-11",
        "border-primary-6",
        "focus-visible:ring-primary-8 focus-visible:ring-offset-primary-1",
        "disabled:bg-primary-4 disabled:text-primary-8 disabled:border-primary-5",
      ],
    },
  },
  defaults: {
    color: "neutral",
  },
});

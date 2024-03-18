import type { VariantsOf } from "@klass/core";
import { klass, compose, composed } from "./../utils.ts";

import { baseButtonVariants } from "./variants.ts";
import { marginVariants } from "./../styles.ts";

export type ButtonVariants = VariantsOf<typeof buttonVariants>;

export const buttonVariants = compose(
  baseButtonVariants,
  klass({
    variants: {
      size: {
        sm: "px-3 h-6 text-sm font-normal rounded-md",
        md: "px-4 h-8 text-base font-medium rounded-lg",
        lg: "px-5 h-10 text-lg font-medium rounded-xl",
      },
    },
    defaults: {
      size: "md",
    },
  }),
  marginVariants
);

export const Button = composed("button", buttonVariants, {
  dp: {
    type: "button",
  },
});

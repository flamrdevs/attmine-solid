import type { VariantsOf } from "@klass/core";
import { klass, compose, composed } from "./../utils.ts";

import { baseButtonVariants } from "./../Button/variants.ts";
import { marginVariants } from "./../styles.ts";

export type IconButtonVariants = VariantsOf<typeof iconButtonVariants>;

export const iconButtonVariants = compose(
  baseButtonVariants,
  klass({
    variants: {
      size: {
        sm: "w-6 h-6 text-sm font-normal rounded-md",
        md: "w-8 h-8 text-base font-medium rounded-lg",
        lg: "w-10 h-10 text-lg font-medium rounded-xl",
      },
    },
    defaults: {
      size: "md",
    },
  }),
  marginVariants
);

export const IconButton = composed("button", iconButtonVariants, {
  dp: {
    type: "button",
  },
});

import { group } from "../utils.ts";

export default group({
  base: {
    root: "flex-shrink-0 rounded-full",
    fallback: [
      "flex data-[state=hidden]:hidden",
      "items-center justify-center h-[inherit]",
      "bg-neutral-1 text-neutral-11 border border-neutral-2 rounded-full",
    ],
    image: "object-cover border border-neutral-3 rounded-full",
  },
  variants: {
    size: {
      sm: {
        root: "w-8 h-8",
        fallback: "text-sm",
        image: "w-8 h-8",
      },
      md: {
        root: "w-10 h-10",
        fallback: "text-base",
        image: "w-10 h-10",
      },
      lg: {
        root: "w-12 h-12",
        fallback: "text-lg",
        image: "w-12 h-12",
      },
    },
  },
  defaults: {
    size: "md",
  },
});

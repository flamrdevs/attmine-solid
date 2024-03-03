import type { Config } from "tailwindcss";

import coloradix, { slate, violet } from "@coloradix/tailwindcss";

const radix = coloradix({
  slate,
  violet,
})
  .alias({
    neutral: "slate",
    primary: "violet",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
  },
  plugins: [radix.plugin],
} satisfies Config;

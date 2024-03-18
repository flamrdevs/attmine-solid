import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
  safelist: (() => {
    const screens = ["sm", "md", "lg", "xl"];
    const responsive = (...classNames: string[]) => {
      let result: string[] = [];
      classNames.forEach((className) => result.push(className, ...screens.map((screen) => `${screen}:${className}`)));
      return result;
    };

    const spacing = (property: string) => {
      return [`${property}-1`, `${property}-2`, `${property}-3`, `${property}-5`, `${property}-8`];
    };

    return [
      ...responsive(
        ...spacing("m"),
        ...spacing("mx"),
        ...spacing("my"),
        ...spacing("mt"),
        ...spacing("mr"),
        ...spacing("mb"),
        ...spacing("ml"),
        ...spacing("p"),
        ...spacing("px"),
        ...spacing("py"),
        ...spacing("pt"),
        ...spacing("pr"),
        ...spacing("pb"),
        ...spacing("pl")
      ),
    ];
  })(),
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
        mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
      },
    },
  },
  plugins: [radix.plugin],
} satisfies Config;

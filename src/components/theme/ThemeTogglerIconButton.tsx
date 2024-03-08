import { Show } from "solid-js";

import { MoonIcon, SunIcon } from "lucide-solid";

import { IconButton, type IconButtonVariants } from "~/components/ui";

import { toggleTheme, useTheme } from "~/store/theme.ts";

type ThemeTogglerIconButtonProps = IconButtonVariants;

export const ThemeTogglerIconButton = (props: ThemeTogglerIconButtonProps) => {
  const theme = useTheme();

  return (
    <IconButton {...props} onClick={toggleTheme}>
      <Show when={theme() === "dark"} fallback={<MoonIcon />}>
        <SunIcon />
      </Show>
    </IconButton>
  );
};

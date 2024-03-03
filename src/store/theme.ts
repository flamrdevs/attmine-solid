import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/solid";

type Theme = "light" | "dark";

const $theme = persistentAtom<Theme>("attmine:theme", "dark");

export const useTheme = () => useStore($theme);

export const toggleTheme = () => {
  $theme.set($theme.get() === "dark" ? "light" : "dark");
};

export const init = () => {
  const unsub = $theme.subscribe((theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  });
  $theme.set($theme.get());
  return unsub;
};

export default $theme;

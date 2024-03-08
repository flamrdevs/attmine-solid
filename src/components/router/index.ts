import { mklassed } from "~/components/ui/utils.ts";

import { Button, IconButton } from "~/components/ui";

import { CustomLink } from "./lib.tsx";

export const CustomLinkButton = mklassed(CustomLink, Button.klass);
export const CustomLinkIconButton = mklassed(CustomLink, IconButton.klass);

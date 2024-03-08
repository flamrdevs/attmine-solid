import { splitProps } from "solid-js";

import { useHref, useResolvedPath } from "@solidjs/router";
import type { AnchorProps } from "@solidjs/router";

type CustomLinkProps = Omit<AnchorProps, "href" | "activeClass" | "inactiveClass"> & { href: string };

export const CustomLink = (props: CustomLinkProps) => {
  const [local, rest] = splitProps(props, ["href", "state"]);
  const to = useResolvedPath(() => local.href);
  const href = useHref(to);

  return <a {...rest} href={href() || local.href} state={JSON.stringify(local.state)} link />;
};

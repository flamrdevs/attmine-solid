import { children, createMemo, splitProps } from "solid-js";

import { Avatar as ArkAvatar } from "@ark-ui/solid";
import type { AvatarImageProps } from "@ark-ui/solid";

import type { VariantsOfGroup } from "@klass/core/group";

import type { ClassNamesProps } from "./../types.ts";

import { CLASSES_SPLITTER, CHILDREN_SPLITTER } from "./../utils.ts";

import styles from "./Avatar.styles.ts";

export type AvatarProps = AvatarImageProps & ClassNamesProps<keyof typeof styles> & VariantsOfGroup<typeof styles>;

export const Avatar = (props: AvatarProps) => {
  const [variants, classes, child, rest] = splitProps(props, styles.root.k, CLASSES_SPLITTER, CHILDREN_SPLITTER);

  const cx = createMemo(() => ({
    root: styles.root(variants, classes.classNames?.root),
    fallback: styles.fallback(variants, classes.classNames?.fallback),
    image: styles.image(variants, classes.class ?? classes.classNames?.image),
  }));

  const c = children(() => child.children);

  return (
    <ArkAvatar.Root class={cx().root}>
      <ArkAvatar.Fallback class={cx().fallback}>{c()}</ArkAvatar.Fallback>
      <ArkAvatar.Image class={cx().image} {...rest} />
    </ArkAvatar.Root>
  );
};

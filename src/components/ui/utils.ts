import setupCore from "@klass/core/setup";
import type { Config } from "@klass/core/setup";
import setupCoreGroup from "@klass/core/group/setup";
import setupSolid from "@klass/solid/setup";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";
import type { ClassValue } from "clsx";

const config: Config = {
  end: twMerge,
};

export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues));

export const [klass, reklass] = setupCore(config);
export const [klassed, reklassed] = setupSolid(config);
export const group = setupCoreGroup(config);

export const CLASSES_SPLITTER = ["class", "classNames"] as const;

export const CHILDREN_SPLITTER = ["children"] as const;
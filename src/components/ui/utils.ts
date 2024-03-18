import { createKlass, createReklass, createCompose } from "@klass/core/create";
import { createGroup } from "@klass/core/group/create";
import * as poly from "@klass/solid/create";
import * as mono from "@klass/solid/mono/create";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";
import type { ClassValue } from "clsx";

export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues));

const options = { end: twMerge };

export const klass = createKlass(options);
export const reklass = createReklass(options);
export const compose = createCompose(options);
export const group = createGroup(klass);

export const klassed = poly.createKlassed(klass);
export const reklassed = poly.createReklassed(reklass);
export const composed = poly.createComposed(compose);

export const mklassed = mono.createKlassed(klass);
export const mreklassed = mono.createReklassed(reklass);
export const mcomposed = mono.createComposed(compose);

export const CLASSES_SPLITTER = ["class", "classNames"] as const;
export const CHILDREN_SPLITTER = ["children"] as const;

import { For } from "solid-js";
import type { Component } from "solid-js";

import { A } from "@solidjs/router";

import { ArrowUpRightIcon, ComponentIcon, LayoutDashboardIcon, StarIcon } from "lucide-solid";

import { Badge, Button } from "~/components/ui";
import { ThemeTogglerIconButton } from "~/components/theme";

export default (() => {
  const links = [
    {
      title: "Dashboard",
      href: "/dash",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Components",
      href: "/components",
      icon: ComponentIcon,
    },
  ];

  return (
    <main class="container mx-auto max-w-screen-lg">
      <header class="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="attmine-solid" class="font-bold text-2xl lg:text-3xl select-none">
          Attmine Solid
        </h1>

        <Badge>WIP</Badge>

        <div class="grow" />

        <Button as="a" href="https://github.com/flamrdevs/attmine-solid" target="_blank" class="hidden md:inline-flex">
          <span>Star on GitHub</span>
          <StarIcon />
        </Button>

        <ThemeTogglerIconButton />
      </header>

      <main class="my-12 lg:my-16">
        <h2 id="get-started" class="mb-4 font-medium text-center text-xl lg:text-2xl select-none">
          Get started
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 p-4 sm:p-5 md:p-6 lg:p-7">
          <For each={links}>
            {(link) => (
              <A
                href={link.href}
                class="group px-6 py-5 bg-neutral-2 hover:bg-neutral-3 outline-none select-none border border-neutral-4 hover:border-neutral-6 rounded-2xl shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1"
              >
                <div class="flex items-center gap-2 lg:gap-3 text-lg lg:text-xl">
                  <span class="p-1 border border-neutral-4 group-hover:border-neutral-6 rounded-lg">
                    <link.icon class="text-neutral-9 group-hover:text-neutral-11 group-focus-visible:text-neutral-11" />
                  </span>
                  <span class="text-neutral-11 group-hover:text-neutral-12 group-focus-visible:text-neutral-12">{link.title}</span>
                </div>

                <div class="flex justify-end mt-4">
                  <ArrowUpRightIcon class="size-7 text-neutral-9 group-hover:text-neutral-11 group-focus-visible:text-neutral-11 transition group-hover:-translate-y-1 group-focus-visible:-translate-y-1" />
                </div>
              </A>
            )}
          </For>
        </div>
      </main>

      <footer class="mx-auto px-4 md:px-8">
        <span class="block text-center text-sm text-neutral-7">
          created by{" "}
          <a
            href="https://github.com/flamrdevs"
            target="_blank"
            class="text-neutral-7 hover:text-neutral-9 outline-none focus-visible:text-neutral-9"
          >
            flamrdevs
          </a>
        </span>
      </footer>
    </main>
  );
}) satisfies Component;

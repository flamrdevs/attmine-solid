import type { Component, ParentProps } from "solid-js";

import { PlusIcon, RocketIcon } from "lucide-solid";

import { Badge, Button, IconButton } from "~/components/ui";

const Section = (props: ParentProps<{ title: string }>) => {
  return (
    <div>
      <h2 class="font-medium text-lg lg:text-xl">{props.title}</h2>

      <div class="flex flex-col items-stretch gap-4 p-3">{props.children}</div>
    </div>
  );
};

Section.Sub = (props: ParentProps<{ title: string }>) => {
  return (
    <div>
      <h3 class="font-normal text-base lg:text-lg"> {props.title}</h3>

      <div class="flex flex-row items-center gap-4 p-3">{props.children}</div>
    </div>
  );
};

export default (() => {
  return (
    <main class="container mx-auto max-w-screen-lg">
      <header class="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="components" class="font-bold text-xl lg:text-2xl select-none">
          Components
        </h1>
      </header>

      <main class="space-y-8 xl:space-y-12 p-4 sm:p-5 md:p-6 lg:p-7">
        <Section title="Badge">
          <Section.Sub title="Color">
            <Badge color="neutral">neutral</Badge>
            <Badge color="primary">primary</Badge>
          </Section.Sub>

          <Section.Sub title="Size">
            <Badge size="sm">small</Badge>
            <Badge size="md">medium</Badge>
            <Badge size="lg">large</Badge>
          </Section.Sub>

          <Section.Sub title="Icon">
            <Badge>
              <PlusIcon class="size-3" />
              left
            </Badge>
            <Badge>
              right
              <PlusIcon class="size-3" />
            </Badge>
          </Section.Sub>
        </Section>

        <Section title="Button">
          <Section.Sub title="Color">
            <Button color="neutral">neutral</Button>
            <Button color="primary">primary</Button>
          </Section.Sub>

          <Section.Sub title="Size">
            <Button size="sm">small</Button>
            <Button size="md">medium</Button>
            <Button size="lg">large</Button>
          </Section.Sub>

          <Section.Sub title="Icon">
            <Button>
              <PlusIcon />
              left
            </Button>
            <Button>
              right
              <PlusIcon />
            </Button>
          </Section.Sub>

          <Section.Sub title="State">
            <Button disabled>disabled</Button>
          </Section.Sub>
        </Section>

        <Section title="IconButton">
          <Section.Sub title="Color">
            <IconButton color="neutral">
              <RocketIcon />
            </IconButton>
            <IconButton color="primary">
              <RocketIcon />
            </IconButton>
          </Section.Sub>

          <Section.Sub title="Size">
            <IconButton size="sm">
              <RocketIcon class="size-3" />
            </IconButton>
            <IconButton size="md">
              <RocketIcon class="size-4" />
            </IconButton>
            <IconButton size="lg">
              <RocketIcon class="size-5" />
            </IconButton>
          </Section.Sub>

          <Section.Sub title="State">
            <IconButton disabled>
              <RocketIcon />
            </IconButton>
          </Section.Sub>
        </Section>
      </main>
    </main>
  );
}) satisfies Component;

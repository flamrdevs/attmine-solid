import type { Component } from "solid-js";

export default (() => {
  return (
    <main class="container mx-auto max-w-screen-lg">
      <header class="flex items-center gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
        <h1 id="components" class="font-bold text-xl lg:text-2xl select-none">
          Components
        </h1>
      </header>
    </main>
  );
}) satisfies Component;

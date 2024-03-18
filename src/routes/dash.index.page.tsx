import type { Component } from "solid-js";

export default (() => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div class="h-40 bg-neutral-2 rounded-lg" />
      <div class="h-40 bg-neutral-2 rounded-lg" />
      <div class="lg:col-span-2 h-40 bg-neutral-2 rounded-lg" />
      <div class="h-40 bg-neutral-2 rounded-lg" />
      <div class="h-40 bg-neutral-2 rounded-lg" />
      <div class="lg:col-span-2 h-40 bg-neutral-2 rounded-lg" />
    </div>
  );
}) satisfies Component;

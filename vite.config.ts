import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  base: "/osm2svelte/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested2: resolve(__dirname, "thicken_roads.html"),
        nested4: resolve(__dirname, "cats.html"),
      },
    },
  },
  plugins: [svelte(), wasmPack([], ["osm2streets-js"])],
})

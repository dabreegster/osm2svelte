import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  base: "/osm2svelte/",
  plugins: [svelte(), wasmPack([], ["osm2streets-js"])],
})

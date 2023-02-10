import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  plugins: [svelte(), wasmPack([], ["osm2streets-js"])],
})

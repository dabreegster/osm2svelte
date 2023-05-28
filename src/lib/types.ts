import type { ComponentType } from "svelte";

export interface LayerSpec {
  label: string;
  show: boolean;
  content: ComponentType;
}

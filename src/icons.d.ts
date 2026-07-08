/// <reference types="unplugin-icons/types/solid" />

import type { JSX } from "solid-js";

declare module "unplugin-icons/types/solid" {
  type IconProps = {
    class?: string;
    style?: Record<string, string | number>;
    width?: string | number;
    height?: string | number;
    "aria-hidden"?: boolean | string;
  };
  type IconComponent = (props: IconProps) => JSX.Element;
}

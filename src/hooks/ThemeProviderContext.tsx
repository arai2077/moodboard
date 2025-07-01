import { createContext } from "react";
import type { ThemeProviderState } from "@/common/types";
import { INITIAL_THEME_STATE } from "@/common/constants";

export const ThemeProviderContext =
  createContext<ThemeProviderState>(INITIAL_THEME_STATE);

import { useSyncExternalStore } from "react";

import Icon from "./Icon";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <div
      onClick={() => {
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        );
      }}
      role="button"
      aria-label="Switch Theme"
    >
      {mounted && <Icon>{theme === "dark" ? "moon" : "sun"}</Icon>}
    </div>
  );
}

export default ThemeSwitch;

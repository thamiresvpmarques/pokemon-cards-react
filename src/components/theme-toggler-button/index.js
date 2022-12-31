import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { Button } from "../button";

const ThemeTogglerButton = () => {
  const { theme, setThemes } = useContext(ThemeContext);

  return (
    <Button
      onClick={() =>
        setThemes(theme === themes.light ? themes.dark : themes.light)
      }
    >
      Theme
    </Button>
  );
};

export { ThemeTogglerButton }
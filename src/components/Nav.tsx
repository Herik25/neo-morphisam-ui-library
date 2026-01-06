import { useTheme } from "../providers/theme-provider";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

function Nav() {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="py-8 px-12 flex justify-between items-center max-w-5xl mx-auto">
      <h1 className="font-boldk">Neumorphism UI</h1>
      <Button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        shape={"circle"}
        size={"icon"}
      >
        {theme === "dark" ? (
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-primary" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-9 text-warning" />
        )}
      </Button>
    </nav>
  );
}

export default Nav;

import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle";
import { CitySearch } from "./city-search";

const Header = () => {
    const { theme } = useTheme();
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to={"/"}>
                    <img
                        src={theme === "dark" ? "/Weather.png" : "/Weather2.png"}
                        alt="Aurel logo"
                        className="h-20"
                    />
                </Link>
                <div className="flex gap-4">
                    <CitySearch />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
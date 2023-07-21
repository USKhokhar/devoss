import Link from "next/link"
import { Cog, Github, Info } from "lucide-react"
import { Button } from "./ui/button"

import ThemeToggle from "./ThemeToggle"
import InfoDialog from "./InfoDialog"
import { SearchBox } from "./SearchBox"


const Header = () => {
    return (
        // Header Component
        <header className="flex justify-between items-center px-4 py-2 bg-secondary/80 supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">

            {/* Logo/Title on header left to navigate to home on click */}
            <Button asChild variant={"ghost"}>
                <Link href={"/"} className="text-xl font-semibold">
                    dev <span className="grd-txt">oss</span>
                </Link>
            </Button>

            {/* all required navigation links like --> theme toggle, github repo, search, etc */}
            <nav className="flex justify-between items-center gap-5">
                {/* Search Box */}
                <div className="md:block hidden">
                    <SearchBox />
                </div>

                {/* Info icon to open information modal on click */}
                <InfoDialog />

                {/* Link to the main github repo of this project */}
                <Link href={"https://github.com/USKhokhar/devoss"} target="_blank" className="text-lg font-semibold">
                    <Github />
                </Link>
                
                {/* Theme toggle button -->  planning to make it a list with multiple themes */}    
                <ThemeToggle />

            </nav>
        </header>
    )
}
export default Header
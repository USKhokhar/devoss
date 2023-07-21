"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { DialogProps } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command"
import { CircleIcon, FileIcon, FileTextIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react"
// import { contentIndex } from "@/content/doc"
import contentIndex from "@/content/doc.json"
import { FileSearch2 } from "lucide-react"


export function SearchBox({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-[50vw] justify-between px-2 items-center text-sm text-muted-foreground md:w-32 lg:w-56"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search Posts...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd>
            <FileSearch2 className="md:mr-2 h-5 w-5" />
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search a post..." />
        <CommandList>
          <CommandEmpty>No Posts found... Maybe Read something else!</CommandEmpty>
          <CommandGroup heading="Posts">
            {contentIndex
              .map((navItem) => (
                <CommandItem
                    className="cursor-pointer"
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string))
                  }}
                >
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  <div className="flex w-full justify-between items-center">
                    <p>
                        {navItem.title}
                    </p>

                    <p className="text-xs text-primary/50 uppercase">
                        {navItem.level}
                    </p>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

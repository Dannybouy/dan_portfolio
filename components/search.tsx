"use client"

import { useState } from "react"
import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function Search() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative w-full">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          onClick={() => setOpen(true)}
          className="pl-8"
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Articles">
            {/* Add your search results here */}
          </CommandGroup>
          <CommandGroup heading="Projects">
            {/* Add your search results here */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}


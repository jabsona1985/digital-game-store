"use client"

import { useState } from "react"
import { Search, ChevronDown, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// ენების სია ქართული დასახელებებით
const languages = [
  { code: "GE", label: "ქართული" },
  { code: "EN", label: "English" },
  { code: "RU", label: "Русский" },
]

export function Navbar() {
  const [selectedLang, setSelectedLang] = useState("GE") // ნაგულისხმევი ენა ქართული

  // მარტივი თარგმანის ობიექტი ნავიგაციისთვის
  const t = {
    GE: { search: "მოძებნე თამაშები...", signIn: "შესვლა" },
    EN: { search: "Search games...", signIn: "Sign In" },
    RU: { search: "Поиск игр...", signIn: "Войти" }
  }[selectedLang as keyof typeof languages] || { search: "Search games...", signIn: "Sign In" };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Gamepad2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Game<span className="text-primary">Vault</span>
          </span>
        </a>

        {/* Search Bar */}
        <div className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t.search}
              className="w-full pl-10 bg-secondary border-border focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 border-border bg-secondary hover:bg-muted">
                <span className="font-medium">{selectedLang}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border text-foreground">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className="cursor-pointer hover:bg-muted flex justify-between gap-4"
                >
                  <span className="font-medium">{lang.code}</span>
                  <span className="text-muted-foreground text-sm">{lang.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sign In Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            {t.signIn}
          </Button>
        </div>
      </div>
    </header>
  )
}
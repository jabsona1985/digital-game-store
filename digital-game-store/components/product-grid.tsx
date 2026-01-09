"use client"

import { useState } from "react"
import { GameCard } from "./game-card"
import { PlatformFilter } from "./platform-filter"

const translations = {
  GE: {
    title: "საუკეთესო",
    highlight: "შეთავაზებები",
    description: "შეიძინეთ საუკეთესო თამაშები დაუჯერებელ ფასად. შეზღუდული დროით შეთავაზებები PlayStation და Xbox-ის ჰიტებზე.",
  },
  EN: {
    title: "Featured",
    highlight: "Deals",
    description: "Grab the best games at unbeatable prices. Limited time offers on top PlayStation and Xbox titles.",
  },
  RU: {
    title: "Лучшие",
    highlight: "Предложения",
    description: "Успейте купить лучшие игры по невероятным ценам. Ограниченные предложения на хиты PlayStation и Xbox.",
  }
}

const games = [
  {
    id: 1,
    title: "God of War Ragnarök",
    platform: "playstation" as const,
    originalPrice: 189,
    discountedPrice: 129,
    discount: 32,
    image: "https://images.unsplash.com/photo-1605895617485-830f5ec8f172?auto=format&fit=crop&q=80",
  },
  // ... სხვა თამაშები (აქ შეგიძლია დაამატო ნებისმიერი რაოდენობა)
]

export function ProductGrid({ lang = "GE" }: { lang?: string }) {
  const [activeFilter, setActiveFilter] = useState("all")
  const t = translations[lang as keyof typeof translations] || translations.GE;

  const filteredGames = games.filter((game) => {
    if (activeFilter === "all") return true
    return game.platform === activeFilter
  })

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t.title} <span className="text-primary">{t.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.description}
          </p>

          <PlatformFilter onFilterChange={setActiveFilter} activeFilter={activeFilter} lang={lang} />
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} {...game} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
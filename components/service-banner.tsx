import { Zap } from "lucide-react"

export function ServiceBanner() {
  return (
    <div className="relative bg-gradient-to-r from-accent via-accent/90 to-secondary text-accent-foreground py-4 md:py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
          <Zap className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
          <h3 className="text-sm md:text-lg font-bold">
            PrimeOne Wedding Planners — Vadodara&apos;s Most Trusted Since 2010
            <span className="block md:inline md:ml-2">
              <em className="text-xs md:text-base not-italic">— 2000+ Weddings Planned | Free Consultation</em>
            </span>
          </h3>
          <Zap className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

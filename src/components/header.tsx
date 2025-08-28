import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🍳</span>
            </div>
            <h1 className="text-xl font-bold text-primary-foreground">Kitchen Chronicles</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Recipes
          </a>
          <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Tips
          </a>
          <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            About
          </a>
          <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  )
}

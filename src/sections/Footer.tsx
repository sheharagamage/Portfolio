import { Heart } from 'lucide-react'

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="text-muted-foreground flex items-center justify-center gap-1">
        © 2025 Shehara Gamage. Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> in Sri Lanka
      </p>
    </div>
  </footer>
)

export default Footer

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Twitter, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "プロジェクト", href: "#projects" },
  { name: "スキル", href: "#skills" },
  { name: "お問い合わせ", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* ロゴ */}
          <motion.button
            onClick={() => scrollToSection("#hero")}
            className="font-bold text-xl lg:text-2xl tracking-tight text-foreground hover:text-foreground/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            hiromps<span className="text-muted-foreground">.</span>
          </motion.button>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* デスクトップ: CTA + テーマ */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => window.open("https://github.com/hiromps", "_blank")}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => window.open("https://x.com/hiromps_dev", "_blank")}
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              className="ml-2"
              onClick={() => scrollToSection("#contact")}
            >
              お問い合わせ
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニュー"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <div className="mx-auto px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-4 flex gap-3">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => scrollToSection("#contact")}
                >
                  お問い合わせ
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://github.com/hiromps", "_blank")}
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://x.com/hiromps_dev", "_blank")}
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
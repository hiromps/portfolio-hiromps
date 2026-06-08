"use client"

import * as React from "react"
import { Github, Twitter, Mail, ArrowUpRight } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "プロジェクト", href: "#projects" },
    { name: "スキル", href: "#skills" },
    { name: "お問い合わせ", href: "#contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/hiromps", icon: Github },
    { name: "X (Twitter)", href: "https://x.com/hiromps_dev", icon: Twitter },
    { name: "Email", href: "mailto:contact@hiromps.dev", icon: Mail },
  ],
  projects: [
    { name: "iPhone自動化マクロ", href: "#projects" },
    { name: "SNSマーケティング", href: "#projects" },
    { name: "診断士学習PWA", href: "#projects" },
    { name: "AI自動化ボット", href: "#projects" },
  ],
}

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* メインフッター */}
        <div className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ブランド */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-bold tracking-tight text-foreground hover:text-foreground/80 transition-colors"
            >
              hiromps<span className="text-muted-foreground">.</span>
            </button>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI自動化エンジニア。iPhoneマクロ開発から
              Webアプリケーションまで、自動化の力で
              ビジネスを加速します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              ナビゲーション
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* プロジェクト */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              プロジェクト
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ソーシャル */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              つながる
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.social.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} hiromps. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js &mdash; Deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
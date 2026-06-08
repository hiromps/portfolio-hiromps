"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { ArrowDown, Github, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 背景グリッドパターン */}
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* 背景グラデーションオーブ */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-orb bg-primary/30" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-orb bg-chart-3/20" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 z-10 relative py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* アイブロー */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6"
          >
            AI Automation Engineer
          </motion.p>

          {/* 名前 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-8"
          >
            hiromps
          </motion.h1>

          {/* タイピングアニメーション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-10 h-10"
          >
            <Typewriter
              options={{
                strings: [
                  "AI自動化エンジニア",
                  "iPhoneマクロ開発者",
                  "SNS自動化スペシャリスト",
                  "PWA開発者",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>

          {/* 自己紹介 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base lg:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            iPhoneマクロを活用したInstagramなどのSNS自動化を専門としています。
            SNSマーケティングプラットフォームの運営や、中小企業診断士向けの
            学習支援PWAアプリの開発も手がけています。
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base"
              onClick={() => {
                const el = document.querySelector("#contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Send className="mr-2 h-4 w-4" />
              お問い合わせ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
              onClick={() => {
                const el = document.querySelector("#projects")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              プロジェクトを見る
            </Button>
          </motion.div>

          {/* ソーシャルリンク */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-3 mt-8"
          >
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
          </motion.div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  )
}
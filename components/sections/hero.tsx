"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { Github, Twitter, ChevronDown, Sparkles, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 md:py-0"
    >
      {/* 背景のアニメーション要素 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* AI/自動化をイメージさせるアイコン - モバイルで非表示 */}
        <motion.div
          className="hidden sm:block absolute top-20 left-20 text-primary/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Cpu className="w-12 h-12 sm:w-16 sm:h-16" />
        </motion.div>

        <motion.div
          className="hidden sm:block absolute bottom-20 right-20 text-blue-500/20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Zap className="w-16 h-16 sm:w-20 sm:h-20" />
        </motion.div>

        <motion.div
          className="hidden md:block absolute top-1/2 right-1/3 text-primary/10"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Sparkles className="w-20 h-20 lg:w-24 lg:h-24" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 名前 */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              hiromps
            </span>
          </motion.h1>

          {/* タイピングアニメーション */}
          <div className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 h-10 flex items-center justify-center">
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
          </div>

          {/* 自己紹介 */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            iPhoneマクロを活用したInstagramなどのSNS自動化を専門としています。
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            SNSマーケティングプラットフォームの運営や、中小企業診断士向けの
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            学習支援PWAアプリの開発も手がけています。
          </motion.p>

          {/* ソーシャルリンク */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-h-[44px] touch-manipulation"
              onClick={() => window.open("https://github.com/hiromps", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto min-h-[44px] touch-manipulation"
              onClick={() => window.open("https://x.com/hiromps_dev", "_blank")}
            >
              <Twitter className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              X (Twitter)
            </Button>
          </motion.div>

          {/* スクロールインジケーター */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { Github, Twitter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 md:py-0"
    >
      {/* 背景のアニメーション要素 */}
      <div className="absolute inset-0 z-0">
        {/* 背景のグラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/70 to-background/50 z-20" />

        {/* OrbitingCirclesコンテナ */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-10">
          <div className="relative w-full h-full">
            {/* 内側の円 - 速い回転 */}
            <OrbitingCircles
              className="size-[80px] border-none bg-transparent"
              duration={20}
              delay={0}
              radius={180}
            >
              <Image
                src="/smartgram.png"
                alt="SmartGram"
                width={80}
                height={80}
                className="rounded-lg object-cover shadow-2xl"
              />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[80px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={180}
            >
              <Image
                src="/chatbot.png"
                alt="Chatbot"
                width={80}
                height={80}
                className="rounded-lg object-cover shadow-2xl"
              />
            </OrbitingCircles>

            {/* 外側の円 - 逆回転 */}
            <OrbitingCircles
              className="size-[100px] border-none bg-transparent"
              radius={320}
              duration={30}
              reverse
            >
              <Image
                src="/openart.png"
                alt="OpenArt"
                width={100}
                height={100}
                className="rounded-lg object-cover shadow-2xl"
              />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[100px] border-none bg-transparent"
              radius={320}
              duration={30}
              delay={15}
              reverse
            >
              <Image
                src="/socialgoodworld.png"
                alt="Social Good World"
                width={100}
                height={100}
                className="rounded-lg object-cover shadow-2xl"
              />
            </OrbitingCircles>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-30 relative">
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
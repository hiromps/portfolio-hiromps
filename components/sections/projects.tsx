"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone, TrendingUp, BookOpen, Bot, Layers, Zap } from "lucide-react"

const projects = [
  {
    title: "iPhone自動化マクロ",
    description: "iOSショートカットを活用した高度なSNS自動化システム",
    details: "Instagramの自動いいね、フォロー、ストーリー閲覧などを実現するマクロシステム。APIを使わずにiPhoneのネイティブ機能だけで実装。",
    tech: ["iOS Shortcuts", "JavaScript", "Automation"],
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SNSマーケティングプラットフォーム",
    description: "複数SNSを一元管理できるマーケティング自動化ツール",
    details: "Instagram、Twitter、TikTokなど複数のSNSプラットフォームを統合管理。分析からコンテンツ投稿まで自動化。",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "診断士学習PWA",
    description: "Duolingoライクな中小企業診断士試験対策アプリ",
    details: "ゲーミフィケーションを取り入れた学習体験。オフライン対応のPWAで、どこでも学習可能。",
    tech: ["React", "PWA", "IndexedDB", "Service Worker"],
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI自動化ボット",
    description: "ChatGPT APIを活用した業務自動化システム",
    details: "定型業務の自動化、レポート生成、データ分析など、AIを活用した様々な自動化ソリューション。",
    tech: ["Python", "OpenAI API", "FastAPI", "Docker"],
    icon: Bot,
    color: "from-orange-500 to-red-500",
  },
]

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            プロジェクト
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            自動化とAIを活用した革新的なソリューション
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity min-w-[44px] min-h-[44px]"
                        aria-label="詳細を見る"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
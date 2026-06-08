"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Smartphone, TrendingUp, BookOpen, Bot, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "iPhone自動化マクロ",
    description: "iOSショートカットを活用した高度なSNS自動化システム。Instagramの自動いいね、フォロー、ストーリー閲覧などを実現。",
    tech: ["iOS Shortcuts", "JavaScript", "Automation"],
    icon: Smartphone,
    size: "large",
  },
  {
    title: "SNSマーケティングプラットフォーム",
    description: "複数SNSを一元管理できるマーケティング自動化ツール。Instagram、Twitter、TikTokなど複数プラットフォームを統合管理。",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    icon: TrendingUp,
    size: "small",
  },
  {
    title: "診断士学習PWA",
    description: "Duolingoライクな中小企業診断士試験対策アプリ。ゲーミフィケーションを取り入れた学習体験を提供。",
    tech: ["React", "PWA", "IndexedDB", "Service Worker"],
    icon: BookOpen,
    size: "small",
  },
  {
    title: "AI自動化ボット",
    description: "ChatGPT APIを活用した業務自動化システム。定型業務の自動化、レポート生成、データ分析など様々な自動化ソリューションを提供。",
    tech: ["Python", "OpenAI API", "FastAPI", "Docker"],
    icon: Bot,
    size: "large",
  },
]

export function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Projects
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4">
            プロジェクト
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl">
            自動化とAIを活用した革新的なソリューション
          </p>
        </motion.div>

        {/* ベントーグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isLarge = project.size === "large"

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${isLarge ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div className="group relative h-full rounded-xl border border-border/40 bg-card p-6 lg:p-8 hover:border-border hover:shadow-lg transition-all duration-300">
                  {/* アイコン */}
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </h3>

                  {/* 説明 */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* テクノロジータグ */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ホバー時の矢印 */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
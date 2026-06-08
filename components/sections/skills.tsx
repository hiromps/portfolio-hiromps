"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Smartphone,
  Bot,
  Code2,
  Database,
  Layers,
  Cpu,
  Palette,
  GitBranch,
  Cloud,
  Shield,
  Globe,
  Braces,
  Atom,
  Workflow,
} from "lucide-react"

const skillCategories = [
  {
    title: "自動化・AI",
    description: "iOSショートカットからChatGPT APIまで、自動化のための技術スタック",
    icon: Bot,
    skills: [
      { name: "iOS Shortcuts", icon: Smartphone, level: 4 },
      { name: "ChatGPT / OpenAI API", icon: Atom, level: 4 },
      { name: "Python Automation", icon: Braces, level: 3 },
      { name: "Web Scraping", icon: Globe, level: 4 },
    ],
  },
  {
    title: "フロントエンド",
    description: "モダンなWebフレームワークを使ったPWA開発",
    icon: Palette,
    skills: [
      { name: "React / Next.js", icon: Code2, level: 4 },
      { name: "TypeScript", icon: Braces, level: 4 },
      { name: "Tailwind CSS", icon: Palette, level: 4 },
      { name: "PWA開発", icon: Globe, level: 3 },
    ],
  },
  {
    title: "バックエンド",
    description: "スケーラブルなAPIとデータベース設計",
    icon: Database,
    skills: [
      { name: "Node.js", icon: Braces, level: 3 },
      { name: "Python / FastAPI", icon: Workflow, level: 3 },
      { name: "PostgreSQL", icon: Database, level: 3 },
      { name: "REST API", icon: Layers, level: 4 },
    ],
  },
  {
    title: "ツール・その他",
    description: "開発ワークフローを支えるツール群",
    icon: GitBranch,
    skills: [
      { name: "Git / GitHub", icon: GitBranch, level: 4 },
      { name: "Docker", icon: Layers, level: 3 },
      { name: "CI/CD", icon: Workflow, level: 3 },
      { name: "SEO最適化", icon: Globe, level: 4 },
    ],
  },
]

function DotIndicator({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((dot) => (
        <div
          key={dot}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            dot <= level ? "bg-foreground" : "bg-border"
          }`}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
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
            Skills
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4">
            スキルセット
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl">
            自動化とフルスタック開発の専門技術
          </p>
        </motion.div>

        {/* スキルカテゴリグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CatIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="h-full rounded-xl border border-border/40 bg-card p-6 lg:p-8 hover:border-border hover:shadow-md transition-all duration-300">
                  {/* カテゴリヘッダー */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <CatIcon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* スキルリスト */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <SkillIcon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <DotIndicator level={skill.level} />
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* その他のテクノロジー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <p className="text-sm font-medium text-muted-foreground mb-6 text-center">
            その他のテクノロジー
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Smartphone, name: "モバイル開発" },
              { icon: Cloud, name: "クラウド" },
              { icon: Shield, name: "セキュリティ" },
              { icon: Layers, name: "マイクロサービス" },
              { icon: Cpu, name: "機械学習" },
              { icon: Code2, name: "クリーンコード" },
              { icon: Workflow, name: "自動化" },
              { icon: Globe, name: "Web標準" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border/40 bg-card hover:border-border hover:shadow-sm transition-all cursor-default"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
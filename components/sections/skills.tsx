"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
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
} from "lucide-react"

const skillCategories = [
  {
    title: "自動化・AI",
    icon: Bot,
    skills: [
      { name: "iOS Shortcuts", level: 95 },
      { name: "ChatGPT/OpenAI API", level: 90 },
      { name: "Python Automation", level: 85 },
      { name: "Web Scraping", level: 88 },
    ],
  },
  {
    title: "フロントエンド",
    icon: Palette,
    skills: [
      { name: "React/Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "PWA開発", level: 85 },
    ],
  },
  {
    title: "バックエンド",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python/FastAPI", level: 83 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST API", level: 87 },
    ],
  },
  {
    title: "ツール・その他",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 78 },
      { name: "SEO最適化", level: 82 },
    ],
  },
]

export function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            スキルセット
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            自動化とフルスタック開発の専門技術
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* 追加のスキルアイコン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4 sm:mb-6">その他のテクノロジー</p>
          <div className="grid grid-cols-3 sm:flex sm:justify-center sm:flex-wrap gap-3 sm:gap-4 max-w-xl mx-auto sm:max-w-none">
            {[
              { icon: Smartphone, name: "モバイル開発" },
              { icon: Cloud, name: "クラウド" },
              { icon: Shield, name: "セキュリティ" },
              { icon: Layers, name: "マイクロサービス" },
              { icon: Cpu, name: "機械学習" },
              { icon: Code2, name: "クリーンコード" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="p-3 sm:p-4 bg-card rounded-lg border hover:border-primary transition-colors cursor-pointer min-h-[80px] sm:min-h-[100px] flex flex-col items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {item.name}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, Send, ArrowUpRight, MessageCircle } from "lucide-react"

const contacts = [
  {
    icon: Github,
    title: "GitHub",
    description: "コードとプロジェクトを確認できます。オープンソースへの貢献も。",
    link: "https://github.com/hiromps",
    label: "プロフィールを見る",
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    description: "最新情報や技術的な発信を行っています。DMもお気軽に。",
    link: "https://x.com/hiromps_dev",
    label: "フォローする",
  },
  {
    icon: Mail,
    title: "Email",
    description: "お仕事のご依頼・ご相談はこちらから。2営業日以内に返信します。",
    link: "mailto:contact@hiromps.dev",
    label: "メールを送る",
  },
]

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-20 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4">
            お問い合わせ
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-lg mx-auto">
            プロジェクトのご相談、コラボレーションのご提案はお気軽に。
          </p>
        </motion.div>

        {/* コンタクトカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="group h-full rounded-xl border border-border/40 bg-card p-6 lg:p-8 hover:border-border hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* アイコン */}
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>

                  {/* コンテンツ */}
                  <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {contact.description}
                  </p>

                  {/* リンク */}
                  <button
                    onClick={() => window.open(contact.link, "_blank")}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                  >
                    {contact.label}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center rounded-2xl border border-border/40 bg-muted/30 p-8 lg:p-12"
        >
          <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            一緒に何か作りませんか？
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            自動化、AI、Webアプリケーション開発など、
            あなたのアイデアを実現するお手伝いをします。まずはお気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              className="h-12 px-8"
              onClick={() => window.open("https://x.com/hiromps_dev", "_blank")}
            >
              <Twitter className="mr-2 h-5 w-5" />
              DMで相談する
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8"
              onClick={() => window.open("https://github.com/hiromps", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              作品を見る
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
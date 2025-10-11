"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, MessageCircle, Send, Globe } from "lucide-react"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const contacts = [
    {
      icon: Github,
      title: "GitHub",
      description: "コードとプロジェクトを確認",
      link: "https://github.com/hiromps",
      action: "プロフィールを見る",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      description: "最新情報とアップデート",
      link: "https://x.com/hiromps_dev",
      action: "フォローする",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "お仕事のご依頼・ご相談",
      link: "mailto:contact@hiromps.dev",
      action: "メールを送る",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            プロジェクトのご相談、コラボレーションのご提案はお気軽に
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-4 bg-primary/10 rounded-full ${contact.color} transition-colors`}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-center text-xl">{contact.title}</CardTitle>
                    <CardDescription className="text-center">
                      {contact.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full group min-h-[44px] touch-manipulation"
                      onClick={() => window.open(contact.link, "_blank")}
                    >
                      <span className="text-sm sm:text-base">{contact.action}</span>
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block mb-4"
            >
              <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              一緒に何か作りませんか？
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              自動化、AI、Webアプリケーション開発など、
              <br className="hidden sm:block" />
              あなたのアイデアを実現するお手伝いをします。
              <br className="hidden sm:block" />
              まずはお気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto min-h-[44px] touch-manipulation"
                onClick={() => window.open("https://x.com/hiromps_dev", "_blank")}
              >
                <Twitter className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">DMで相談する</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto min-h-[44px] touch-manipulation"
                onClick={() => window.open("https://github.com/hiromps", "_blank")}
              >
                <Globe className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base">作品を見る</span>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
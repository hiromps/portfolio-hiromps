"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

// 動的インポートでパフォーマンス最適化
const HeroSection = dynamic(
  () => import("@/components/sections/hero").then((mod) => ({ default: mod.HeroSection })),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)

const HeroScrollDemo = dynamic(
  () => import("@/components/sections/hero-scroll-demo").then((mod) => ({ default: mod.HeroScrollDemo })),
  {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
  }
)

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects").then((mod) => ({ default: mod.ProjectsSection })),
  {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
  }
)

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((mod) => ({ default: mod.SkillsSection })),
  {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
  }
)

const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => <div className="min-h-[400px]" />,
    ssr: true,
  }
)

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main className="relative">
        <Suspense fallback={<div className="min-h-screen" />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <HeroScrollDemo />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
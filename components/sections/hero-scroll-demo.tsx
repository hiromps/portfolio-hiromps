"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-muted/30">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Featured Projects
            </p>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              プロジェクトを
              <span className="text-muted-foreground"> 見てみよう</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              iPhoneマクロ自動化からSNSマーケティングプラットフォーム、
              中小企業診断士向け学習アプリまで。様々なプロダクトを手がけています。
            </p>
          </>
        }
      >
        <Image
          src="/iphone-demo.png"
          alt="プロジェクト概要"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

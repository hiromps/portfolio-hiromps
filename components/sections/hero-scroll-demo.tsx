"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              プロジェクトを <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                見てみよう
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/iphone-demo.png"
          alt="iPhone デモ画面"
          height={812}
          width={375}
          className="h-full w-full object-cover object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

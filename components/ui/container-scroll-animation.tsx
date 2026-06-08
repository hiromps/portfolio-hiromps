"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      className="h-[50rem] lg:h-[70rem] flex items-center justify-center relative p-4 lg:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 lg:py-40 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-4xl mx-auto text-center mb-12 lg:mb-20"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000000d, 0 8px 24px #0000001a, 0 32px 48px #0000001f, 0 64px 80px #00000014, 0 120px 100px #00000008",
      }}
      className="max-w-5xl -mt-8 mx-auto rounded-2xl border border-border/50 bg-card overflow-hidden"
    >
      <div className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

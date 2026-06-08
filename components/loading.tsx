"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            {/* ロゴアニメーション */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold tracking-tight"
            >
              hiromps<span className="text-muted-foreground">.</span>
            </motion.div>

            {/* プログレスバー */}
            <div className="w-32 h-0.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
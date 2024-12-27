"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function CollaborationSection() {
  return (
    <section className="w-full bg-zinc-950 py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto relative">
        {/* Decorative Cubes */}
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute left-0 top-0 opacity-20"
        >
          <div className="w-24 h-24 border border-teal-400 transform rotate-45" />
        </motion.div>

        <motion.div
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute right-0 bottom-0 opacity-20"
        >
          <div className="w-32 h-32 border border-teal-400 transform rotate-45" />
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-4 mb-12">
            <span>Let&apos;s</span>{" "}
            <ChevronDown className="lg:size-20 sm:size-14  text-white bg-orange-500 rounded-lg inline-block" />{" "}
            Work
            <br />
            Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don&apos;t hesitate to drop me a line
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-teal-400 hover:bg-teal-500 text-black border-2"
            >
              <a href="mailto:danielokpara29@gmail.com">Talk with me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

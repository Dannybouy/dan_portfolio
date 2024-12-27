"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import skimlessImg from "../public/images/skimless-img2.png"

interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Skimless",
    description:
      "Let skimless turn your static PDF documents into dynamic conversations with AI",
    image: skimlessImg,
    link: "/projects/skimless",
  },
  {
    title: "Mobile Banking",
    description:
      "Next-generation mobile banking application with innovative features",
    image: "",
    link: "/projects/mobile-banking",
  },
  {
    title: "Digital Agency",
    description: "Modern digital agency website with dynamic animations",
    image: "",
    link: "/projects/digital-agency",
  },
];

export function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mt-2">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 dark:text-white text-black transition-colors border font-mono px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            View More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={project.title}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 mb-4">{project.description}</p>
                    <span className="text-teal-500 flex items-center gap-2 text-sm">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="md:hidden flex items-center gap-2 text-white hover:text-[#9EFF00] transition-colors justify-center mt-8 border border-white/20 px-4 py-2 rounded-lg hover:border-[#9EFF00]"
        >
          View More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

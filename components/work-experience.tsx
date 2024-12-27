'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface Technology {
  name: string
  icon: string
}

interface WorkExperience {
  role: string
  company: string
  image: string
  technologies: Technology[]
  gradient: string
}

const experiences: WorkExperience[] = [
  {
    role: "Frontend Engineer",
    company: "Hugging Face",
    image: "/placeholder.svg?height=300&width=400&text=🤗&bg=fbbf24",
    technologies: [
      { name: "JavaScript", icon: "/placeholder.svg?height=24&width=24&text=JS" },
      { name: "TypeScript", icon: "/placeholder.svg?height=24&width=24&text=TS" },
      { name: "React", icon: "/placeholder.svg?height=24&width=24&text=⚛" },
      { name: "Node.js", icon: "/placeholder.svg?height=24&width=24&text=N" },
      { name: "Git", icon: "/placeholder.svg?height=24&width=24&text=G" }
    ],
    gradient: "from-amber-500 to-violet-600"
  },
  {
    role: "Senior Software Engineering",
    company: "MEE6 Discord Bot",
    image: "/placeholder.svg?height=300&width=400&text=MEE6&bg=3b82f6",
    technologies: [
      { name: "JavaScript", icon: "/placeholder.svg?height=24&width=24&text=JS" },
      { name: "TypeScript", icon: "/placeholder.svg?height=24&width=24&text=TS" },
      { name: "React", icon: "/placeholder.svg?height=24&width=24&text=⚛" },
      { name: "Node.js", icon: "/placeholder.svg?height=24&width=24&text=N" },
      { name: "Git", icon: "/placeholder.svg?height=24&width=24&text=G" }
    ],
    gradient: "from-blue-600 to-violet-600"
  },
  {
    role: "Javascript Developer",
    company: "PrestaShop",
    image: "/placeholder.svg?height=300&width=400&text=PS&bg=db2777",
    technologies: [
      { name: "TypeScript", icon: "/placeholder.svg?height=24&width=24&text=TS" },
      { name: "Vue", icon: "/placeholder.svg?height=24&width=24&text=V" },
      { name: "Node.js", icon: "/placeholder.svg?height=24&width=24&text=N" },
      { name: "Python", icon: "/placeholder.svg?height=24&width=24&text=P" },
      { name: "Docker", icon: "/placeholder.svg?height=24&width=24&text=D" },
      { name: "Git", icon: "/placeholder.svg?height=24&width=24&text=G" }
    ],
    gradient: "from-pink-600 to-purple-600"
  },
  {
    role: "Javascript Developer",
    company: "Uptoo",
    image: "/placeholder.svg?height=300&width=400&text=UP&bg=8b5cf6",
    technologies: [
      { name: "JavaScript", icon: "/placeholder.svg?height=24&width=24&text=JS" },
      { name: "React", icon: "/placeholder.svg?height=24&width=24&text=⚛" },
      { name: "Vue", icon: "/placeholder.svg?height=24&width=24&text=V" },
      { name: "Node.js", icon: "/placeholder.svg?height=24&width=24&text=N" },
      { name: "Docker", icon: "/placeholder.svg?height=24&width=24&text=D" },
      { name: "Git", icon: "/placeholder.svg?height=24&width=24&text=G" }
    ],
    gradient: "from-violet-600 to-indigo-600"
  }
]

export function WorkExperience() {
  return (
    <section className="w-full py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${experience.gradient}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.company}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-zinc-200 mb-2">{experience.role}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{experience.company}</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="w-8 h-8 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      title={tech.name}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="opacity-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { SEOMetadata } from "@/components/seo-metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pic8 from "@/public/images/8.webp";
import {
  Briefcase,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = SEOMetadata({
  title: "About",
  description:
    "Learn about Daniel Okpara, a software engineer and frontend developer based in Lagos, Nigeria.",
  keywords: ["about daniel okpara", "software engineer", "frontend developer"],
});

const socialLinks = [
  {
    icon: Twitter,
    label: "Follow on X",
    href: "https://x.com/IamDannybouy20",
  },
  {
    icon: Instagram,
    label: "Follow on Instagram",
    href: "https://www.instagram.com/iamdannybouy/",
  },
  {
    icon: Github,
    label: "Follow on GitHub",
    href: "https://github.com/Dannybouy",
  },
  {
    icon: Linkedin,
    label: "Follow on LinkedIn",
    href: "https://www.linkedin.com/in/daniel-okpara/",
  },
  {
    icon: Mail,
    label: "danielokpara29@gmail.com",
    href: "mailto:danielokpara29@gmail.com",
  },
];

const workExperience = [
  {
    company: "Programmer's University",
    role: "React Developer",
    period: "2024 — Present",
  },
  {
    company: "NATGAB CONSULTANCY LIMITED",
    role: "Frontend Developer",
    period: "2023",
  },
  {
    company: "RAOATECH IT-ELECTROMECH LIMITED",
    role: "Frontend Developer",
    period: "2023",
  },
  {
    company: "Javaplus Innovations Ltd",
    role: "Frontend Developer Intern",
    period: "2022",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr] lg:gap-x-8">
          <div className="lg:pl-20 lg:order">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={pic8}
                alt="Spencer in an astronaut helmet"
                width={800}
                height={800}
                priority
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100 font-unbounded">
              I&apos;m Daniel Okpara. I live in Lagos Nigeria, where I build the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                The journey for me began in secondary school when I did a
                subject called Basic Computer, I remember been fascinated about
                the multipurpose nature of computers and how they work in the
                basic form and how my brain just understood the subject.
              </p>
              <p>
                It was then I need what I was going to study in the university,
                I was confused at first but I knew I wanted to do something with
                computers, so I decided to study Computer Engineering because
                the combination of Computers + Engineering really excited me. I
                went to the university studied Computer Engineering for 5 years
                at the university of Lagos, and I graduated with a degree in
                computer engineering :)
              </p>
              <p>
                My journey into software engineering began in 2020 when I
                decided to start learning beyond the lecture room, took a
                frontend career path from scrimba and got my first internship in
                2022 and since then, I kept growing in my craft as a developer,
                engineer, and graphic designer in my spare time
              </p>
              <p>
                Today, I am 5 years in and my passion is stronger than when I
                first started.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="space-y-10">
              <Card className="border-none shadow-none bg-zinc-50 dark:bg-zinc-800/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Briefcase className="h-5 w-5" />
                    Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {workExperience.map((job) => (
                    <div key={job.company} className="flex items-start gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate text-sm">
                            {job.company}
                          </h3>
                          <p className="text-sm text-zinc-500">{job.period}</p>
                        </div>
                        <p className="text-sm text-zinc-500">{job.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4 gap-2">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </CardContent>
              </Card>

              <div>
                <ul role="list" className="space-y-4 font-mono">
                  {socialLinks.map((link) => (
                    <li key={link.label} className="flex">
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-400 dark:text-zinc-200 dark:hover:text-teal-400"
                      >
                        <link.icon className="h-6 w-6 flex-none" />
                        <span className="ml-4">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

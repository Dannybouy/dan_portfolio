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
    "Learn about Spencer Sharp, a software designer and entrepreneur based in New York City, working on civilian space technology.",
  keywords: [
    "about Spencer Sharp",
    "software design career",
    "space technology entrepreneur",
  ],
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
              I&apos;m Spencer Sharp. I live in New York City, where I design
              the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve loved making things for as long as I can remember, and
                wrote my first program when I was 6 years old, just two weeks
                after my mom brought home the brand new Macintosh LC 550 that I
                taught myself to type on.
              </p>
              <p>
                The only thing I loved more than computers as a kid was space.
                When I was 8, I climbed the 40-foot oak tree at the back of our
                yard while wearing my older sister&apos;s motorcycle helmet,
                counted down from three, and jumped — hoping the tree was tall
                enough that with just a bit of momentum I&apos;d be able to get
                to orbit.
              </p>
              <p>
                I spent the next few summers indoors working on a rocket design,
                while I recovered from the multiple surgeries it took to fix my
                badly broken legs. It took nine iterations, but when I was 15 I
                sent my dad&apos;s Blackberry into orbit and was able to
                transmit a photo back down to our family computer from space.
              </p>
              <p>
                Today, I&apos;m the founder of Planetaria, where we&apos;re
                working on civilian space suits and manned shuttle kits you can
                assemble at home so that the next generation of kids really{" "}
                <em>can</em> make it to orbit — from the comfort of their own
                backyards.
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

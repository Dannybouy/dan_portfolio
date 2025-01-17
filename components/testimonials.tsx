import javaplus from "@/public/images/javaplus.jpg";
import melodia from "@/public/images/melodia.jpeg";
import natgab from "@/public/images/natgab.jpeg";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Daniel’s work made our projects run smoother and more efficiently, and his willingness not to run from a challenge made him a pleasure to work with. His skills and dedication truly made a difference",
    author: "Zaccariah Olufunmilayo",
    role: "Director",
    company: "NATGAB CONSULTANCY LIMITED",
    image: natgab,
  },
  {
    quote:
      "I had the pleasure of working with Daniel during his time as a developer at our firm, and I can confidently say he was an invaluable asset to the team. He was always eager to collaborate and bring fresh perspectives to the table. I highly recommend him for future opportunities",
    author: "Precious Ekwere-Tom",
    role: "CTO",
    company: "Javaplus Innovation Ltd.",
    image: javaplus,
  },
  {
    quote:
      "I had the pleasure of working with Daniel during his time at Melodia Coding Academy. He demonstrated strong technical expertise in HTML, CSS, Bootstrap, and JavaScript, while actively collaborating to deliver comprehensive training sessions. Daniel’s dedication to maintaining up-to-date materials and providing one-on-one support showcased his commitment to excellence and teamwork.",
    author: "Dr. Ochuko Iyogwoya",
    role: "President",
    company: "Melodia Coding Academy",
    image: melodia,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4 font-unbounded">
            Words from previous collegues
          </h2>
          <p className="text-base lg:text-lg text-zinc-600 dark:text-zinc-300">
            I try to see how I am doing with the people I have worked with and
            currently working with
          </p>
        </div>

        <div className="relative">
          {/* Grid pattern background */}
          <div className="absolute inset-0 -z-10 bg-grid opacity-10" />

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-background rounded-2xl shadow-lg p-6 ring-1 ring-zinc-900/5 dark:ring-white/10 hover:shadow-xl transition-shadow "
              >
                <div className="relative z-10 divide-y ">
                  <p className="text-base text-zinc-600 dark:text-zinc-300 mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full border object-cover"
                    />
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="font-semibold">
                          {testimonial.role}
                        </span>{" "}
                        at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

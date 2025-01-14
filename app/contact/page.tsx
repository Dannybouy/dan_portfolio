"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copyright, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const services = ["Gig", "Job", "Chat"];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82ab44ea-22b1-4efd-bc5a-35b3377f053d", // Replace with your API key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          service: selectedService,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setSelectedService("");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hire Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
            HIRE ME
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                CONTACTS
              </h2>
              <a
                href="mailto:danielokpara29@gmail.com"
                className="text-xl font-medium hover:text-teal-400 transition-colors"
              >
                DANIELOKPARA29@GMAIL.COM
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                Follow
              </h2>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/iamdannybouy/"
                  className="hover:text-teal-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://x.com/IamDannybouy20"
                  className="hover:text-teal-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://github.com/Dannybouy"
                  className="hover:text-teal-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">Github</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I hope I have been able to convince you and make you feel
                comfortable to wanting to reach out to me? In my books, I think
                I did a good job. You can reach out using the form.
              </p>
              <p className="text-sm text-muted-foreground flex gap-2"><Copyright className="size-5"/> DANIEL 2024</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                HIRE ME
              </h2>
              <h3 className="text-3xl font-medium mb-8">
                LET&apos;S WORK TOGETHER
              </h3>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <Badge
                        key={service}
                        variant={
                          selectedService === service ? "default" : "secondary"
                        }
                        className={`rounded-full px-4 py-1 cursor-pointer transition-colors ${
                          selectedService === service
                            ? "bg-teal-400 text-white"
                            : "hover:bg-teal-400 hover:text-white"
                        }`}
                        onClick={() => setSelectedService(service)}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <form className="space-y-6 font-mono" onSubmit={onSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="rounded-none border-x-0 border-t-0 border-b-2 px-0"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="rounded-none border-x-0 border-t-0 border-b-2 px-0"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="min-h-[100px] rounded-none border-x-0 border-t-0 border-b-2 px-0 "
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={!selectedService || isLoading}
                      className="rounded-full transition-colors"
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

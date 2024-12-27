"use client";

import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function TextToSpeech({ text }: { text: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;

  const speak = () => {
    if (!synth) {
      toast.error("Speech synthesis not supported");
      return;
    }

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsPlaying(false);
    synth.speak(utterance);
    setIsPlaying(true);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={speak}
      className="mt-4"
      aria-label={isPlaying ? "Stop reading" : "Read article"}
    >
      {isPlaying ? (
        <VolumeX className="h-6 w-6" />
      ) : (
        <Volume2 className="h-6 w-6" />
      )}
    </Button>
  );
}

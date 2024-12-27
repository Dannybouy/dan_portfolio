'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface ProjectGalleryProps {
  images?: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!images || !Array.isArray(images) || images.length === 0) {
    return <p>No images available.</p>
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800"
            onClick={() => setSelectedImage(images.findIndex(img => img.src === image.src))}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            {image.caption && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="p-4 text-sm text-white">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage !== null && (
            <div className="relative aspect-[16/10]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
              {images[selectedImage].caption && (
                <p className="absolute bottom-0 w-full bg-black/60 p-4 text-center text-white">
                  {images[selectedImage].caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image: string
  tags?: string[]
}

export function ProjectCard({ title, description, link, image, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={link}>
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        {tags && (
          <CardFooter className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        )}
      </Link>
    </Card>
  )
}


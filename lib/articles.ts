import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  content: string
}

export async function getAllArticles(): Promise<Article[]> {
  const files = await fs.readdir(articlesDirectory)
  const articles = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(articlesDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        content,
      }
    })
  )

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
      content,
    }
  } catch {
    return null
  }
}


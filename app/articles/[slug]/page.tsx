import { ArrowLeft, Volume2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/articles'
import { Button } from '@/components/ui/button'
import { TextToSpeech } from '@/components/text-to-speech'
import { MDXContent } from '@/components/mdx-content'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>
            <header className="flex flex-col">
              <time
                dateTime={article.date}
                className="flex items-center text-base text-zinc-500 dark:text-zinc-400"
              >
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {article.title}
              </h1>
              <TextToSpeech text={article.content} />
            </header>
            <div className="mt-8 space-y-6">
              {article.image && (
                <div className="relative aspect-[16/10] rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={article.image}
                    alt=""
                    className="rounded-2xl object-cover"
                    fill
                    priority
                  />
                </div>
              )}
              <div className="prose dark:prose-invert">
                <MDXContent content={article.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


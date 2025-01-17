import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllArticles } from '@/lib/articles'
import { SEOMetadata } from '@/components/seo-metadata'

export const metadata = SEOMetadata({
  title: 'Articles',
  description: 'Thoughts on software engineering, by Daniel Okpara.',
  keywords: ['software design', 'software engineering', 'frontend', 'blog'],
})

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl pt-24 pb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl font-unbounded">
            Writing on software development, hacks, tips, and tricks.
          </h1>
          <p className="mt-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            All of my long-form thoughts on programming,software engineering, and problem solving collected in chronological order.
          </p>
        </header>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <article key={article.slug} className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                    <Link href={`/articles/${article.slug}`}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">{article.title}</span>
                    </Link>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400 pl-3.5"
                    dateTime={article.date}
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {article.description}
                  </p>
                  <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                    Read article
                    <ArrowRight className="ml-1 h-4 w-4 stroke-current" />
                  </div>
                </div>
                <time
                  className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400"
                  dateTime={article.date}
                >
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


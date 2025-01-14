/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-zinc-600 dark:text-zinc-400 leading-7" {...props} />
  ),
  a: (props: any) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-500 hover:text-teal-600"
      {...props}
    />
  ),
};

export function MDXContent({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />;
}

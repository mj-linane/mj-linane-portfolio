import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import type Post from '@/interfaces/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

type PostData = Omit<Post, 'slug' | 'content'>

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const postData = data as PostData

  const post: Post = {
    slug: realSlug,
    content,
    ...postData,
  }
  // Ensure only the minimal needed data is exposed
  const items: Partial<Post> = {} // Use Partial<Post> as not all properties of Post may be present
  fields.forEach((field: keyof Post) => {
    if (post[field] !== undefined) {
      items[field] = post[field]
    }
  })
  return items as Post
}

export async function getAllPosts(fields: string[] = []): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  )
  // sort posts by date in descending order
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type FilteredPostData = Record<string, string>

  const filteredData: FilteredPostData = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      filteredData[field] = realSlug
    }
    if (field === 'content') {
      filteredData[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      filteredData[field] = data[field]
    }
  })
  return filteredData
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  )
  // sort posts by date in descending order
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

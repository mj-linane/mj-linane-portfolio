import Author from '@/interfaces/author'

type PostType = {
  author: Author
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType

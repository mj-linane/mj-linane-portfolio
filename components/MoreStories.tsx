import PostPreview from '@/components/PostPreview'
import type PostType from '@/types/post'

type Props = {
  posts: PostType[]
}

export default function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="blog-more-stories">
        More Stories
      </h2>
      <div className="blog-more-stories-grid">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

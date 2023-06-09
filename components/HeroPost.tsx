import Link from 'next/link'

import Avatar from '@/components/Avatar'
import CoverImage from '@/components/CoverImage'
import DateFormatter from '@/components/DateFormatter'
import type Author from '@/interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export default function HeroPost(postData: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={postData.title}
          src={postData.coverImage}
          slug={postData.slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${postData.slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {postData.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={postData.date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{postData.excerpt}</p>
          <Avatar
            name={postData.author.name}
            picture={postData.author.picture}
          />
        </div>
      </div>
    </section>
  )
}

HeroPost.defaultProps = {
  title: 'Title',
  coverImage: 'https://via.placeholder.com/300x200',
  date: '2021-01-01',
  excerpt: 'This is an excerpt',
}

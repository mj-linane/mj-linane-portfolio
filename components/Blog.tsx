import Container from '@/components/Container'
import HeroPost from '@/components/HeroPost'
import Intro from '@/components/Intro'
import MoreStories from '@/components/MoreStories'

import type PostType from '@/types/post'

type Props = {
  allPosts: PostType[]
}

export default function Blog({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Container>
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}

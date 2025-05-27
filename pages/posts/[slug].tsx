import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ContainerBlock from '@/components/ContainerBlock'
import PostBody from '@/components/PostBody'
import MoreStories from '@/components/MoreStories'
import Header from '@/components/Header'
import PostHeader from '@/components/PostHeader'
import SectionSeparator from '@/components/SectionSeparator'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import PostTitle from '@/components/PostTitle'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import type PostType from '@/types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <ContainerBlock>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | Next.js Blog Example
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </ContainerBlock>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

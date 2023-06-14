import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type MetaProps = {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export default function MetaTags({ meta }: { meta: MetaProps }) {
  const router = useRouter()
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://mjlinane.com${router.asPath}`}
      />
      <link rel="canonical" href={`https://mjlinane.com${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:image" content={meta.image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="@mjlinane" />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  )
}

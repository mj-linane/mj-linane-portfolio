import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '@/components/Footer.jsx'
import NavBar from '@/components/NavBar.jsx'

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter()

  const meta = {
    title: 'MJ Linane - Developer, Designer, Teacher',
    description:
      'I have been developing websites and web applications' +
      ' for over 7 years. Get in touch with me to learn more.',
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
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
      <main className="bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 w-full">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  )
}

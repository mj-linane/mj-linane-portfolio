import React from 'react'

import Footer from '@/components/Footer'
import MetaTags from '@/components/MetaTags'
import NavBar from '@/components/NavBar'

type MetaProps = {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

type Props = {
  children?: React.ReactNode
  customMeta?: MetaProps
}

const defaultMeta: MetaProps = {
  title: 'MJ Linane - Developer, Designer, Teacher',
  description:
    'I have been developing websites and web applications' +
    ' for over 7 years. Get in touch with me to learn more.',
  image: '/avatar.png',
  type: 'website',
}

export default function ContainerBlock({
  children = null,
  customMeta = defaultMeta,
}: Props) {
  return (
    <div>
      <MetaTags meta={customMeta} />
      <main className="bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 w-full">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  )
}

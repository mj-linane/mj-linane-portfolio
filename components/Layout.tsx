import React from 'react'

import Footer from '@/components/Footer'
import Meta from '@/components/Meta'

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children = null }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert preview={preview}/>*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

import React from 'react'

import Footer from '@/components/Footer'
import Meta from '@/components/Meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      {/*<Alert preview={preview}/>*/}
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout

import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children = null }: Props) => (
  <div className="container mx-auto px-5 py-10">{children}</div>
)

export default Container

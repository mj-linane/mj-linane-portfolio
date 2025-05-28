type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

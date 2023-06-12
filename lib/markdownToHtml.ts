import { remark } from 'remark'
import remarkHTML from 'remark-html'
import { Plugin } from 'unified'
import { Node } from 'unist'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkHTML as Plugin<[], Node, Node>)
    .process(markdown)
  return result.toString()
}

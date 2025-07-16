import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import RichText from '@/app/lib/RichText'

type Props = ContentBlockProps

export function ContentBLock(props: Props) {
  return <RichText data={props.content} />
}

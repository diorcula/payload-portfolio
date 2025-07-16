import RichText from '@/app/lib/RichText'
import type { SectionTitleBlock as SectionTitleBLockProps } from '@/payload-types'

type Props = SectionTitleBLockProps

export function SectionTitleBlock(props: Props) {
  return (
    <>
      <h1>{props.sectionTitle}</h1>
      <RichText data={props.sectionText} />
    </>
  )
}

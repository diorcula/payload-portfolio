import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import RichText from '@/app/lib/RichText'
import Link from 'next/link'
type Props = CallToActionBlockProps

//how to query the document?
export function CallToActionBLock(props: Props) {
  if (props.ctabutton.link.url) {
    return (
      <>
        <div className="sectionTitle">
          <RichText data={props.text} />
          <button>
            <Link href={props.ctabutton.link.url}></Link>
          </button>
        </div>
      </>
    )
  }
}

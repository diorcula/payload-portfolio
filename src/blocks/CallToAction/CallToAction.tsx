import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import RichText from '@/app/lib/RichText'
import Link from 'next/link'
import { Button } from '@payloadcms/ui'

type Props = CallToActionBlockProps

//how to query the document?
export function CallToActionBLock(props: Props) {
  if (props.ctabutton.link.url) {
    console.log(props.ctabutton.link.url)
    return (
      <>
        <div
          className="callToAction"
          style={{
            margin: '20px 20px',
            padding: '20px 20px',
            position: 'fixed',
            right: 0,
            width: '50vw',
            background: '#5e5e5eff',
          }}
        >
          <RichText data={props.text} />
          <Link href={props.ctabutton.link.url}>
            <button
              style={{
                margin: '10px 10px',
                padding: '20px 20px',
                backgroundColor: 'blue',
                color: '#ffff',
              }}
            >
              {props.ctabutton.link.text}
            </button>
          </Link>
        </div>
      </>
    )
  }
}

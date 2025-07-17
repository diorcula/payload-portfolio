import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import RichText from '@/app/lib/RichText'
import Link from 'next/link'
import { Button } from '@payloadcms/ui'

type Props = CallToActionBlockProps

function buildReferenceLink(props: Props): string | null {
  if (
    !props?.ctabutton?.link?.reference?.relationTo ||
    !props?.ctabutton?.link?.reference?.value?.slug
  ) {
    return null
  }

  const { relationTo, value } = props.ctabutton.link.reference
  return `/${relationTo}/${value.slug}`
}

export function CallToActionBLock(props: Props) {
  if (props.ctabutton.link.url) {
    return (
      <div
        className="callToAction"
        style={{
          margin: '20px 20px',
          padding: '20px 20px',
          background: '#5e5e5eff',
        }}
      >
        <RichText data={props.text} />
        <Link href={props.ctabutton.link.url}>
          <Button>{props.ctabutton.link.text}</Button>
        </Link>
      </div>
    )
  } else if (props.ctabutton.link.reference) {
    const link = buildReferenceLink(props)
    if (link) {
      return (
        <div
          className="callToAction"
          style={{
            margin: '20px 20px',
            padding: '20px 20px',
            background: '#569d3fff',
          }}
        >
          <RichText data={props.text} />
          <Link href={link}>
            <Button>{props.ctabutton.link.text}</Button>
          </Link>
        </div>
      )
    }
  }
  return null
}

import type { GalleryBlock, Media } from '@/payload-types'
import Image, { type ImageProps } from 'next/image'

type CustomImageProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>

interface Props extends CustomImageProps {
  src: Media | number | undefined | null
}

export function GalleryBlock(props: Props) {
  const image = getPayloadImageObject(props.src)

  if (!image || !image.url) {
    return null
  }

  return (
    <>
      <Image
        {...props}
        src={image.url}
        alt={image.alt || 'Media Block Image'}
        width={image.width || 600}
        height={image.height || 400}
      />
    </>
  )
}

export function getPayloadImageObject(image: number | Media | null | undefined) {
  if (!image || typeof image === 'number') {
    return undefined
  }

  return image
}

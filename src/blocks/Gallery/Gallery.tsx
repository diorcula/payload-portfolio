import type { GalleryBlock, Media } from '@/payload-types'
import Image from 'next/image'

interface Props extends GalleryBlock {}

export function GalleryBlock(props: Props) {
  const images = props.galleryFieldImage

  // this is only rendering the images from the gallery, not the rest of the block (if there is any)
  return (
    <>
      {images?.map((image) => (
        <div key={image.id} className="galleryImage">
          <Image
            src={image.url}
            alt={image.alt || 'Gallery Block Image'}
            width={image.width || 600}
            height={image.height || 400}
          />
        </div>
      ))}
    </>
  )
}

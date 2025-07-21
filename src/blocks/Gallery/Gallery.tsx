import type { GalleryBlock, Media } from '@/payload-types'
import Image from 'next/image'

interface Props extends GalleryBlock {}

export function GalleryBlock(props: Props) {
  const images = props.galleryFieldImage

  return (
    <>
      <div className="gallery">
        <h1>Gallery</h1>
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
      </div>
    </>
  )
}

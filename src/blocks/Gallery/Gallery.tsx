import type { GalleryBlock, Media } from '@/payload-types'
import Image from 'next/image'

interface Props extends GalleryBlock {}

export function GalleryBlock(props: Props) {
  const images = props.galleryFieldImage
  const filteredImages = images?.filter((image) => typeof image === 'object' && image !== null)

  return (
    <>
      <div className="gallery">
        <h1>Gallery</h1>
        {filteredImages?.map((image) => (
          <div key={image.id} className="galleryImage">
            <Image
              src={image.url || '/media/notfound.jpg'}
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

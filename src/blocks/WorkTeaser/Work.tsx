import type {
  ContentBlock,
  GalleryBlock,
  Media,
  SectionTitleBlock,
  WorkTeaserBlock as WorkTeaserBlockProps,
} from '@/payload-types'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Block } from 'payload'
import { Category } from '@/payload-types'

type Props = WorkTeaserBlockProps

export async function WorkTeaserBlock(props: Props) {
  const works = await getQueryResults()

  if (!works || works.length === 0) {
    return null
  }

  return (
    <>
      {works.map((work) => (
        <div key={work.id}>
          <h2>{work.title}</h2>

          <div className="workCategories">
            <h3>Categories:</h3>

            <ul>
              {work.category
                ?.filter((cat): cat is Category => typeof cat === 'object' && cat !== null)
                .map((cat: Category) => (
                  <li key={cat.id}>{cat.title}</li>
                ))}
            </ul>
          </div>

          <div className="workFeatures">
            <h4>Features</h4>
            <ul>
              {work.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="workExcerpt">{work.excerpt}</div>

          <div className="workImages">{TeaserWorkGallery(work.content)}</div>
        </div>
      ))}
    </>
  )
}

function TeaserWorkGallery(
  content: (SectionTitleBlock | GalleryBlock | ContentBlock)[] | null | undefined,
) {
  if (!content) {
    return null
  }

  /* Note: .find() only returns the first matching gallery block.
   If there are multiple gallery blocks, consider using .filter() to collect all of them
    and put them into an array. */

  const filteredImages = content
    .find((block) => block.blockType === 'gallery')
    ?.galleryFieldImage?.filter((image) => typeof image === 'object' && image !== null)

  // console.log('filtered images: ==>' + filteredImages)

  return (
    <>
      <div className="gallery">
        {filteredImages?.map((img) => (
          <div className="galleryImage" key={img.id}>
            <Image
              src={img.url || '/media/notfound.jpg'}
              alt={img.alt || 'Hero Image'}
              width={img.width || 600}
              height={img.height || 400}
            />
          </div>
        ))}
      </div>
    </>
  )
}

async function getQueryResults() {
  try {
    const payload = await getPayload({ config })
    const pageQueryResult = await payload.find({
      collection: 'work',
    })

    if (!pageQueryResult) {
      return null
    }

    return pageQueryResult.docs
  } catch {
    return null
  }
}

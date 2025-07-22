import { Block, getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'

export async function getTeaser() {
  try {
    const payload = await getPayload({ config })
    const pageQueryResult = await payload.find({
      collection: 'work',
    })

    if (!pageQueryResult) {
      return null
    }

    const works = pageQueryResult.docs

    return (
      <>
        {works.map((work) => (
          <div key={work.id}>
            <h2>{work.title}</h2>

            <div className="workCategories">
              <h3>Categories:</h3>

              <ul>
                {work.category.map((cat) => (
                  <li key={cat.id}>{cat.title}</li>
                ))}
              </ul>
            </div>

            <div className="workFeatures">
              <h4>Features</h4>
              <ul>
                {work.features.map((feature, index) => (
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
  } catch {
    return null
  }
}

function TeaserWorkGallery(content: Block) {
  console.log(content)
  const galleryBlock = content.find((block) => block.blockType === 'gallery')

  if (!galleryBlock) return null

  return (
    <div className="gallery">
      {galleryBlock.galleryFieldImage.map((img) => (
        <div className="galleryImage" key={img.id}>
          <Image
            src={img.url}
            alt={img.alt || 'Hero Image'}
            width={img.width || 600}
            height={img.height || 400}
          />
        </div>
      ))}
    </div>
  )
}

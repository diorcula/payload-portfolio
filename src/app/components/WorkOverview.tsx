import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { Category } from '@/payload-types'

export async function getWorkOverview() {
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

          <div className="workHeroImage">
            {typeof work.heroImage === 'object' && work.heroImage !== null && (
              <Image
                src={work.heroImage.url || 'media/notfound.jpg'}
                alt={work.heroImage.alt || 'Work Hero Image'}
                width={work.heroImage.width || 600}
                height={work.heroImage.height || 400}
              />
            )}
          </div>
        </div>
      ))}
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

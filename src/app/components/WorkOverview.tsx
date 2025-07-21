import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'

export async function getWorkOverview() {
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

            <div className="workHeroImage">
              <Image
                src={work.heroImage.url}
                alt={work.heroImage.alt || 'Work Hero Image'}
                width={work.heroImage.width || 600}
                height={work.heroImage.height || 400}
              />
            </div>
          </div>
        ))}
      </>
    )
  } catch {
    return null
  }
}

import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/app/lib/RenderBlocks'
import Image from 'next/image'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = await getPostBySlug(slug)

  return (
    <>
      <main>
        <div className="container">
          <h1> {work.title} </h1>
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
          <RenderBlocks blocks={work.content} />
        </div>
      </main>
    </>
  )
}

// -- helper functions -- //

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pageQueryResult = await payload.find({
    collection: 'work',
    select: {
      slug: true,
    },
  })

  const params = pageQueryResult.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

export async function getPostBySlug(slug: string) {
  const payload = await getPayload({ config })
  const pageQueryResult = await payload.find({
    collection: 'work',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return pageQueryResult.docs[0] || null
}

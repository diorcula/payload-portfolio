import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound, redirect } from 'next/navigation'
import RenderBlocks from '@/app/lib/RenderBlocks'
import Image from 'next/image'
import { getWorkOverview } from '@/app/components/WorkOverview'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (slug === 'home') {
    redirect('/')
  }
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <>
      <main>
        <div className="container">
          <h1> {page.title} </h1>
          <div className="workHeroImage">
            {typeof page.heroImage === 'object' && page.heroImage !== null && (
              <Image
                src={page.heroImage.url || 'media/notfound.jpg'}
                alt={page.heroImage.alt || 'Work Hero Image'}
                width={page.heroImage.width || 600}
                height={page.heroImage.height || 400}
              />
            )}
          </div>

          <RenderBlocks blocks={page.blocks} />

          {page.type === 'workOverview' && (
            <div className="workOverview">
              <h1>Work Overview</h1>
              {getWorkOverview()}
            </div>
          )}
        </div>
      </main>
    </>
  )
}

// -- helper functions -- //

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })

    const pageQueryResults = await payload.find({
      collection: 'pages',
      where: {
        _status: {
          equals: 'published',
        },
        type: {
          equals: 'default', //check dit in backend?
        },
      },
      select: {
        slug: true,
      },
    })

    return pageQueryResults.docs.map((doc) => ({
      slug: doc.slug,
    }))
  } catch {
    return []
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const payload = await getPayload({ config })
    const pageQueryResult = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    return pageQueryResult.docs[0] || null
  } catch {
    return null
  }
}

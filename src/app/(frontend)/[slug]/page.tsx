import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound, redirect } from 'next/navigation'
import RenderBlocks from '@/app/lib/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (slug === 'home') {
    //this feels sketchy?
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
          {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
          <RenderBlocks blocks={page.blocks} />
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

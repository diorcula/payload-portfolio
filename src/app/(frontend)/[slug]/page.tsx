import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <>
      <main>
        <div className="container">
          {/* <h1> {page.title} </h1> */}
          {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
        </div>
      </main>
    </>
  )
}

// -- helper functions -- //

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const pageQueryResult = await payload.find({
      collection: 'pages',
      select: {
        slug: true,
      },
    })

    const params = pageQueryResult.docs
      .filter((doc) => {
        return doc.slug !== 'home' //we do not want the home page as it is statically rendered elsewhere
      })
      .map(({ slug }) => {
        return { slug }
      })

    return params
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

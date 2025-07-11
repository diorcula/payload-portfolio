import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  return (
    <>
      <main>
        <div className="container">
          <h1> {page.title} </h1>
          <pre>{JSON.stringify(page, null, 2)}</pre>
        </div>
      </main>
    </>
  )
}

// -- helper functions -- //

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pageQueryResult = await payload.find({
    collection: 'pages',
    select: {
      slug: true,
    },
  })

  const params = pageQueryResult.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

export async function getPageBySlug(slug: string) {
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
}

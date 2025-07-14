import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = await getPostBySlug(slug)

  return (
    <>
      <main>
        <div className="container">
          <h1> {work.title} </h1>
          <pre>{JSON.stringify(work, null, 2)}</pre>
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

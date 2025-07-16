import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const page = await getHomePage()

  if (!page) {
    notFound()
  }

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

async function getHomePage() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const pageQueryResult = await payload.find({
      collection: 'pages',
      where: {
        type: {
          equals: 'homepage',
        },
      },
      limit: 1,
    })
    return pageQueryResult.docs[0] || null
  } catch {
    return null
  }
}

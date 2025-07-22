import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getTeaser } from '../components/Teaser'
import RenderBlocks from '../lib/RenderBlocks'

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
          <div className="homePageHero">
            {typeof page.heroImage === 'object' && page.heroImage !== null && (
              <Image
                src={page.heroImage.url || 'media/notfound.jpg'}
                alt={page.heroImage.alt || 'Work Hero Image'}
                width={page.heroImage.width || 600}
                height={page.heroImage.height || 400}
              />
            )}
          </div>

          <div className="teasers">
            <h1></h1>
            <RenderBlocks blocks={page.blocks} />
          </div>
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

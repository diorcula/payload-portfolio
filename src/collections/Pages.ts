import { Content } from '@/blocks/Content'
import { CallToAction } from '@/blocks/CallToAction'
import { SectionTitle } from '@/blocks/SectionTitle'
import { CollectionConfig } from 'payload'
import { Services } from '@/blocks/Services'
import { WorkBlock } from '@/blocks/WorkBlock'
import { Teaser } from '@/blocks/Teaser'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'content',
      type: 'blocks',
      blocks: [Content, SectionTitle, CallToAction, Services, WorkBlock, Teaser],
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

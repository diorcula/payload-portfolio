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
      type: 'tabs',
      tabs: [
        {
          label: 'Meta',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'slug', //unique identifier for
              type: 'text',
              admin: {
                position: 'sidebar',
              },
              index: true,
              label: 'Slug',
              required: true,
            },
            {
              name: 'heroImage',
              label: 'Hero Image',
              type: 'relationship',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'layout',
          label: 'Layout',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: [Content, SectionTitle, CallToAction, Services, WorkBlock, Teaser],
            },
          ],
        },
      ],
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

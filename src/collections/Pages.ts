import { Content } from '@/blocks/Content'
import { CollectionConfig } from 'payload'

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
              name: 'description',
              label: 'Description',
              type: 'textarea',
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
              blocks: [Content],
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

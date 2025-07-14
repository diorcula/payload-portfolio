import { Gallery } from '@/blocks/Gallery'
import { SectionTitle } from '@/blocks/SectionTitle'
import { CollectionConfig } from 'payload'

export const Work: CollectionConfig = {
  slug: 'work',

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
      admin: {
        position: 'sidebar',
      },
      index: true,
      label: 'Slug',
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [SectionTitle, Gallery],
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

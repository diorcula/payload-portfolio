import { Content } from '@/blocks/Content/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { SectionTitle } from '@/blocks/SectionTitle/config'
import { CollectionConfig, Payload } from 'payload'
import { Services } from '@/blocks/Services/config'
import { WorkBlock } from '@/blocks/Work/config'

const uniquePageTypes = ['homepage']

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
      name: 'type',
      type: 'select',
      defaultValue: 'content',
      index: true,
      required: true,
      enumName: 'collection_page_type',
      options: [
        {
          value: 'content',
          label: 'Content',
        },
        {
          value: 'homepage',
          label: 'Homepage',
        },
      ],
      //@ts-expect-error can't find documentation how to fix this properly
      validate: async (value: string, { req, data }) => {
        if (!value) {
          return 'You must select an option.'
        }

        const payload: Payload = req.payload

        if (!uniquePageTypes.includes(value)) {
          return true
        }

        const pagesQuery = await payload.count({
          collection: 'pages',
          where: {
            type: {
              equals: value,
            },
            id: {
              not_equals: data.id,
            },
          },
        })

        if (pagesQuery.totalDocs > 0) {
          return `${value} is a unique page type`
        }

        return true
      },
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
      name: 'blocks',
      type: 'blocks',
      blocks: [Content, SectionTitle, CallToAction, Services, WorkBlock],
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

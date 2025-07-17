import { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',

  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          label: 'Item',
          name: 'service',
          type: 'text',
        },
        {
          label: 'Service Image',
          name: 'serviceImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

import { Block } from 'payload'
import type { Field } from 'payload'

export const ServicesField: Field = {
  name: 'servicesfield',
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
}

export const Services: Block = {
  slug: 'services',
  fields: [ServicesField],
}

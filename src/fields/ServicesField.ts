import type { Field } from 'payload'

export const ServicesField: Field = {
  name: 'servicesfield',
  type: 'array',
  fields: [
    {
      label: 'Service',
      name: 'service',
      type: 'text',
    },
    {
      label: 'Service Image',
      name: 'serviceImage',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}

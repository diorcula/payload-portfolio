import { Block } from 'payload'

export const WorkBlock: Block = {
  slug: 'workblock',

  fields: [
    {
      name: ' relationToDocument',
      type: 'relationship',
      relationTo: 'work',
      label: 'Works to show',
      hasMany: true,
    },
  ],
}

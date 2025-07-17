import { Block } from 'payload'

export const WorkBlock: Block = {
  slug: 'workblock',
  interfaceName: 'WorkBLock',

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

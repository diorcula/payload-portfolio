import { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',

  fields: [{ name: 'galleryFieldImage', type: 'upload', relationTo: 'media', hasMany: true }],
}

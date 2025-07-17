import { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',

  fields: [{ name: 'galleryFieldImage', type: 'upload', relationTo: 'media', hasMany: true }],
}

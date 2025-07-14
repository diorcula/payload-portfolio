import type { Field } from 'payload'

export const GalleryField: Field = {
  name: 'galleryImage',
  type: 'array',
  fields: [{ name: 'galleryFieldImage', type: 'upload', relationTo: 'media', hasMany: true }],
}

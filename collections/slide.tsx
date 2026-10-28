import { buildCollection, buildProperty } from '@firecms/core'

export type Slide = {
  order: number
  image: string
  type: string
  createdAt: Date
  updatedAt: Date
}

export const slidesCollection = buildCollection<Slide>({
  id: 'slides',
  name: 'Slides',
  singularName: 'Slides',
  path: 'slides',
  icon: 'Slideshow',
  group: 'Content',
  defaultSize: 'xs',
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    order: {
      name: 'Order',
      validation: { required: true },
      dataType: 'number',
    },
    type: buildProperty({
      dataType: 'string',
      name: 'Type',
      enumValues: {
        mobile: 'Mobile',
        desktop: 'Desktop',
      },
      validation: { required: true },
    }),
    image: buildProperty({
      name: 'Image',
      dataType: 'string',
      storage: {
        storagePath: 'slides',
        storeUrl: true,
        acceptedFiles: ['image/*'],
        metadata: {
          cacheControl: 'max-age=1000000',
        },
      },
      validation: { required: true },
    }),
    createdAt: buildProperty({
      name: 'Created on',
      dataType: 'date',
      autoValue: 'on_create',
    }),
    updatedAt: buildProperty({
      name: 'Updated on',
      dataType: 'date',
      autoValue: 'on_update',
    }),
  },
})

import { buildCollection, buildProperty } from 'firecms'

export type Program = {
  title: string
  desc: string
  order: number
  image: string
  isRecommend: boolean
  createdAt: Date
  updatedAt: Date
}

export const programsCollection = buildCollection<Program>({
  name: 'Programs',
  singularName: 'Programs',
  path: 'Programs',
  icon: 'Programshow',
  group: 'Content',
  defaultSize: 'xs',
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    title: {
      name: 'Title',
      dataType: 'string',
      validation: { required: true },
    },
    desc: {
      name: 'Description',
      dataType: 'string',
    },
    order: {
      name: 'Order',
      validation: { required: true },
      dataType: 'number',
    },
    isRecommend: buildProperty({
      name: 'โปรแกรมแนะนำ',
      validation: { required: true },
      dataType: 'boolean',
    }),
    image: buildProperty({
      name: 'Image',
      dataType: 'string',
      storage: {
        storagePath: 'programs',
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

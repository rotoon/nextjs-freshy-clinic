import { buildCollection, buildProperty } from '@firecms/core'
import { refreshPublicContent } from './refresh-public-content'

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
  id: 'Programs',
  name: 'Programs',
  singularName: 'Programs',
  path: 'Programs',
  icon: 'Programshow',
  group: 'Content',
  defaultSize: 'xs',
  callbacks: {
    onSaveSuccess: refreshPublicContent,
    onDelete: refreshPublicContent,
  },
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    image: buildProperty({
      name: 'Image',
      dataType: 'string',
      storage: {
        storagePath: 'programs',
        storeUrl: true,
        acceptedFiles: ['image/*'],
        metadata: {
          cacheControl: 'public, max-age=2592000',
        },
      },
      validation: { required: true },
    }),
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

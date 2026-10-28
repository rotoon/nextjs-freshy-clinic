import { buildCollection, buildProperty } from '@firecms/core'
import { refreshPublicContent } from './refresh-public-content'

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
      description: 'Desktop ใช้กรอบประมาณ 2.37:1 และ Mobile ใช้กรอบ 1:1 รูปที่ต่างสัดส่วนจะแสดงเต็มภาพพร้อมพื้นที่ว่าง',
      dataType: 'string',
      storage: {
        storagePath: 'slides',
        storeUrl: true,
        acceptedFiles: ['image/*'],
        metadata: {
          cacheControl: 'public, max-age=2592000',
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

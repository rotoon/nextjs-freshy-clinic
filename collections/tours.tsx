import { buildCollection, buildProperty, buildEntityCallbacks } from 'firecms'

export type Tour = {
  order: number
  image: string
  slug: string
  title: string
  price: number
  tags: string[] | []
  albums:
    | {
        title: string
        details: string
      }[]
    | []
  hightLights: string
  timeTour:
    | {
        time: string
        details: string
      }[]
    | []
  createdAt: Date
  updatedAt: Date
}

const tourCallbacks = buildEntityCallbacks({
  onPreSave: ({ values }) => {
    values.slug = values.title
      .toLowerCase()
      .replaceAll('/', '')
      .replace(/\s+/g, '-')
    return values
  },
})

export const toursCollection = buildCollection<Tour>({
  name: 'Tours',
  singularName: 'Tour',
  path: 'tours',
  icon: 'Tour',
  group: 'Content',
  defaultSize: 'xs',
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  callbacks: tourCallbacks,
  properties: {
    order: {
      name: 'Order',
      validation: { required: true },
      dataType: 'number',
    },
    slug: {
      name: 'Slug',
      dataType: 'string',
      disabled: true,
    },
    image: buildProperty({
      name: 'Image',
      dataType: 'string',
      storage: {
        storagePath: 'images',
        storeUrl: true,
        acceptedFiles: ['image/*'],
        metadata: {
          cacheControl: 'max-age=1000000',
        },
      },
    }),
    title: {
      name: 'Title',
      validation: { required: true },
      dataType: 'string',
    },
    tags: {
      name: 'Tags',
      description: 'Tags',
      validation: { required: true },
      dataType: 'array',
      of: {
        dataType: 'string',
      },
    },
    price: {
      name: 'Price',
      validation: {
        required: true,
      },
      description: '',
      dataType: 'number',
    },
    albums: {
      dataType: 'array',
      name: 'Albums',
      of: {
        dataType: 'map',
        properties: {
          title: {
            name: 'Title',
            dataType: 'string',
          },
          image: {
            name: 'Image',
            dataType: 'string',
            storage: {
              storagePath: 'images',
              storeUrl: true,
              acceptedFiles: ['image/*'],
              metadata: {
                cacheControl: 'max-age=1000000',
              },
            },
          },
        },
      },
      description: '',
    },
    hightLights: {
      name: 'Highlights',
      validation: { required: true },
      dataType: 'string',
      markdown: true,
    },
    timeTour: {
      dataType: 'array',
      name: 'Time Tour',
      description: 'Schedule of tour',
      of: {
        dataType: 'map',
        properties: {
          time: {
            name: 'Time',
            dataType: 'string',
          },
          details: {
            name: 'Details',
            dataType: 'string',
          },
        },
      },
    },
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

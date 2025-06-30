import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'url'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
      admin: {
        description: 'Alternative text for accessibility',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Image URL',
      admin: {
        description:
          'Image link in cloud storage (e.g., Alibaba Cloud OSS, Tencent Cloud COS, etc.)',
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Avatar', value: 'avatar' },
        { label: 'Cover Image', value: 'cover' },
        { label: 'Thumbnail', value: 'thumbnail' },
        { label: 'Banner', value: 'banner' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'other',
      label: 'Image Type',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'width',
      type: 'number',
      label: 'Width (pixels)',
    },
    {
      name: 'height',
      type: 'number',
      label: 'Height (pixels)',
    },
    {
      name: 'fileSize',
      type: 'text',
      label: 'File Size',
      admin: {
        description: 'e.g., 2.5MB',
      },
    },
  ],
}

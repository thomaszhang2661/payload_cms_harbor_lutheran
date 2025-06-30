import type { CollectionConfig } from 'payload'

export const Pastors: CollectionConfig = {
  slug: 'pastors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'email'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'e.g., Senior Pastor, Associate Pastor, Minister, etc.',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active Status',
      defaultValue: true,
    },
  ],
}

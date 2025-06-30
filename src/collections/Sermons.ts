import type { CollectionConfig } from 'payload'

export const Sermons: CollectionConfig = {
  slug: 'sermons',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pastor', 'series', 'preachedDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Sermon Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'pastor',
      type: 'relationship',
      relationTo: 'pastors',
      required: true,
      label: 'Speaker',
    },
    {
      name: 'series',
      type: 'relationship',
      relationTo: 'series',
      label: 'Series',
    },
    {
      name: 'preachedDate',
      type: 'date',
      required: true,
      label: 'Preached Date',
    },
    {
      name: 'scripture',
      type: 'text',
      label: 'Scripture',
      admin: {
        description: 'e.g., John 3:16',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Summary',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      label: 'Status',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notes',
    },
  ],
}

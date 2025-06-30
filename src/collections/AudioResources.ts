import type { CollectionConfig } from 'payload'

export const AudioResources: CollectionConfig = {
  slug: 'audio-resources',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sermon', 'duration', 'uploadDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Audio Title',
    },
    {
      name: 'sermon',
      type: 'relationship',
      relationTo: 'sermons',
      required: true,
      label: 'Related Sermon',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'audioUrl',
      type: 'text',
      required: true,
      label: 'Audio File URL',
      admin: {
        description:
          'Audio file link in cloud storage (e.g., Alibaba Cloud OSS, Tencent Cloud COS, etc.)',
      },
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration',
      admin: {
        description: 'e.g., 45:30',
      },
    },
    {
      name: 'fileSize',
      type: 'text',
      label: 'File Size',
      admin: {
        description: 'e.g., 25.6MB',
      },
    },
    {
      name: 'quality',
      type: 'select',
      options: [
        { label: 'Low Quality (64kbps)', value: '64kbps' },
        { label: 'Medium Quality (128kbps)', value: '128kbps' },
        { label: 'High Quality (320kbps)', value: '320kbps' },
      ],
      defaultValue: '128kbps',
      label: 'Audio Quality',
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      label: 'Public Access',
      defaultValue: true,
    },
    {
      name: 'downloadUrl',
      type: 'text',
      label: 'Download URL',
      admin: {
        description: 'External download link (optional)',
      },
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
  ],
}

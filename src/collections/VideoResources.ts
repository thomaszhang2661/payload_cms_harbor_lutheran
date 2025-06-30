import type { CollectionConfig } from 'payload'

export const VideoResources: CollectionConfig = {
  slug: 'video-resources',
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
      label: 'Video Title',
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
      name: 'videoUrl',
      type: 'text',
      required: true,
      label: 'Video File URL',
      admin: {
        description:
          'Video file link in cloud storage (e.g., Alibaba Cloud OSS, Tencent Cloud COS, etc.)',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      label: 'Thumbnail URL',
      admin: {
        description: 'Video thumbnail link (optional)',
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
        description: 'e.g., 256MB',
      },
    },
    {
      name: 'quality',
      type: 'select',
      options: [
        { label: 'SD (480p)', value: '480p' },
        { label: 'HD (720p)', value: '720p' },
        { label: 'Full HD (1080p)', value: '1080p' },
        { label: '4K', value: '4k' },
      ],
      defaultValue: '720p',
      label: 'Video Quality',
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      label: 'Public Access',
      defaultValue: true,
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      label: 'YouTube URL',
      admin: {
        description: 'YouTube video link (optional)',
      },
    },
    {
      name: 'vimeoUrl',
      type: 'text',
      label: 'Vimeo URL',
      admin: {
        description: 'Vimeo video link (optional)',
      },
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

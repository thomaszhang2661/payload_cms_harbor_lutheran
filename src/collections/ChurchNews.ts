import type { CollectionConfig } from 'payload'

export const ChurchNews: CollectionConfig = {
  slug: 'church-news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'News Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Announcement', value: 'announcement' },
        { label: 'Event Notice', value: 'event' },
        { label: 'Ministry Update', value: 'ministry' },
        { label: 'Testimony', value: 'testimony' },
        { label: 'Church History', value: 'history' },
        { label: 'Prayer Request', value: 'prayer' },
        { label: 'Other', value: 'other' },
      ],
      label: 'News Category',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'News Content',
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'News Summary',
      admin: {
        description: 'Brief summary for list page display',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'pastors',
      label: 'Author',
    },
    {
      name: 'publishDate',
      type: 'date',
      required: true,
      label: 'Publish Date',
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
      label: 'Publish Status',
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Related Images',
      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Image Caption',
        },
      ],
    },
    {
      name: 'attachments',
      type: 'array',
      label: 'Related Files',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'File Title',
        },
        {
          name: 'url',
          type: 'text',
          label: 'File URL',
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Document', value: 'document' },
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
            { label: 'Audio', value: 'audio' },
            { label: 'Other', value: 'other' },
          ],
          label: 'File Type',
        },
      ],
    },
    {
      name: 'priority',
      type: 'select',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Important', value: 'important' },
        { label: 'Urgent', value: 'urgent' },
      ],
      defaultValue: 'normal',
      label: 'Priority',
    },
    {
      name: 'expiryDate',
      type: 'date',
      label: 'Expiry Date',
      admin: {
        description: 'Date when news will be automatically unpublished (optional)',
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
    {
      name: 'isPublic',
      type: 'checkbox',
      label: 'Public Display',
      defaultValue: true,
    },
    {
      name: 'allowComments',
      type: 'checkbox',
      label: 'Allow Comments',
      defaultValue: false,
    },
    {
      name: 'viewCount',
      type: 'number',
      label: 'View Count',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
  ],
}

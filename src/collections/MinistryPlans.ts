import type { CollectionConfig } from 'payload'

export const MinistryPlans: CollectionConfig = {
  slug: 'ministry-plans',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'ministry', 'startDate', 'endDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Ministry Plan Title',
    },
    {
      name: 'ministry',
      type: 'select',
      required: true,
      options: [
        { label: 'Worship Ministry', value: 'worship' },
        { label: 'Children Ministry', value: 'children' },
        { label: 'Youth Ministry', value: 'youth' },
        { label: 'Adult Education', value: 'adult-education' },
        { label: 'Mission Ministry', value: 'mission' },
        { label: 'Care Ministry', value: 'care' },
        { label: 'Music Ministry', value: 'music' },
        { label: 'Technical Ministry', value: 'technical' },
        { label: 'Finance Ministry', value: 'finance' },
        { label: 'Other', value: 'other' },
      ],
      label: 'Ministry Category',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Ministry Description',
    },
    {
      name: 'objectives',
      type: 'richText',
      label: 'Objectives & Plans',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Planning', value: 'planning' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Paused', value: 'paused' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'planning',
      label: 'Status',
    },
    {
      name: 'leader',
      type: 'relationship',
      relationTo: 'pastors',
      label: 'Leader',
    },
    {
      name: 'team',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
        },
        {
          name: 'contact',
          type: 'text',
          label: 'Contact',
        },
      ],
    },
    {
      name: 'budget',
      type: 'group',
      label: 'Budget Information',
      fields: [
        {
          name: 'amount',
          type: 'number',
          label: 'Budget Amount',
          admin: {
            description: 'Unit: Yuan',
          },
        },
        {
          name: 'currency',
          type: 'select',
          options: [
            { label: 'Chinese Yuan (CNY)', value: 'CNY' },
            { label: 'US Dollar (USD)', value: 'USD' },
          ],
          defaultValue: 'CNY',
          label: 'Currency',
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Budget Notes',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      label: 'Activity Location',
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
            { label: 'Spreadsheet', value: 'spreadsheet' },
            { label: 'Presentation', value: 'presentation' },
            { label: 'Other', value: 'other' },
          ],
          label: 'File Type',
        },
      ],
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
  ],
}

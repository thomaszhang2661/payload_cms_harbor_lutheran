import type { CollectionConfig } from 'payload'

export const MeetingMinutes: CollectionConfig = {
  slug: 'meeting-minutes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'meetingType', 'meetingDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Meeting Title',
    },
    {
      name: 'meetingType',
      type: 'select',
      required: true,
      options: [
        { label: 'Deacon Board', value: 'deacon-board' },
        { label: 'Staff Meeting', value: 'staff-meeting' },
        { label: 'Ministry Meeting', value: 'ministry-meeting' },
        { label: 'Finance Meeting', value: 'finance-meeting' },
        { label: 'Congregation Meeting', value: 'congregation-meeting' },
        { label: 'Prayer Meeting', value: 'prayer-meeting' },
        { label: 'Training Meeting', value: 'training-meeting' },
        { label: 'Other', value: 'other' },
      ],
      label: 'Meeting Type',
    },
    {
      name: 'meetingDate',
      type: 'date',
      required: true,
      label: 'Meeting Date',
    },
    {
      name: 'startTime',
      type: 'text',
      label: 'Start Time',
      admin: {
        description: 'e.g., 14:00',
      },
    },
    {
      name: 'endTime',
      type: 'text',
      label: 'End Time',
      admin: {
        description: 'e.g., 16:00',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Meeting Location',
    },
    {
      name: 'attendees',
      type: 'array',
      label: 'Attendees',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role/Position',
        },
        {
          name: 'present',
          type: 'checkbox',
          label: 'Present',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'chairperson',
      type: 'relationship',
      relationTo: 'pastors',
      label: 'Chairperson',
    },
    {
      name: 'secretary',
      type: 'relationship',
      relationTo: 'pastors',
      label: 'Secretary',
    },
    {
      name: 'agenda',
      type: 'richText',
      label: 'Meeting Agenda',
    },
    {
      name: 'minutes',
      type: 'richText',
      required: true,
      label: 'Meeting Minutes',
    },
    {
      name: 'decisions',
      type: 'array',
      label: 'Meeting Decisions',
      fields: [
        {
          name: 'decision',
          type: 'text',
          label: 'Decision Content',
        },
        {
          name: 'responsible',
          type: 'text',
          label: 'Responsible Person',
        },
        {
          name: 'deadline',
          type: 'date',
          label: 'Deadline',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Completed', value: 'completed' },
            { label: 'Cancelled', value: 'cancelled' },
          ],
          defaultValue: 'pending',
          label: 'Execution Status',
        },
      ],
    },
    {
      name: 'actionItems',
      type: 'array',
      label: 'Action Items',
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Action Item',
        },
        {
          name: 'assignedTo',
          type: 'text',
          label: 'Assigned To',
        },
        {
          name: 'dueDate',
          type: 'date',
          label: 'Due Date',
        },
        {
          name: 'priority',
          type: 'select',
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Urgent', value: 'urgent' },
          ],
          defaultValue: 'medium',
          label: 'Priority',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Completed', value: 'completed' },
            { label: 'Cancelled', value: 'cancelled' },
          ],
          defaultValue: 'pending',
          label: 'Status',
        },
      ],
    },
    {
      name: 'nextMeeting',
      type: 'group',
      label: 'Next Meeting Arrangement',
      fields: [
        {
          name: 'date',
          type: 'date',
          label: 'Next Meeting Date',
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
        },
        {
          name: 'agenda',
          type: 'textarea',
          label: 'Preliminary Agenda',
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
            { label: 'Meeting Minutes', value: 'minutes' },
            { label: 'Agenda File', value: 'agenda' },
            { label: 'Report File', value: 'report' },
            { label: 'Other', value: 'other' },
          ],
          label: 'File Type',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Confirmed', value: 'confirmed' },
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
      name: 'isPublic',
      type: 'checkbox',
      label: 'Public Display',
      defaultValue: false,
      admin: {
        description: 'Meeting minutes are usually not public, for internal viewing only',
      },
    },
    {
      name: 'confidential',
      type: 'checkbox',
      label: 'Confidential Content',
      defaultValue: false,
      admin: {
        description: 'Mark as confidential content, requires special permissions to view',
      },
    },
  ],
}

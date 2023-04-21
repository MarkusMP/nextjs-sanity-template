import {ExpandIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'hero',
  title: 'Hero',
  icon: ExpandIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      media: ExpandIcon,
      title: `Hero - ${title}`,
    }),
  },

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
  ],
})

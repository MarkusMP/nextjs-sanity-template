import {Upload} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: Upload,

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title for internal reference',
      description:
        "💡 This won't show up for users, just make sure you add a descriptive name which will make it easy to find this when browsing the CMS.",
    }),
    defineField({
      title: 'Logo',
      description: 'Upload logo here.',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'linksItems',
      description: 'Link Lists',
      type: 'array',
      of: [{type: 'linkList'}],
    }),
  ],
})

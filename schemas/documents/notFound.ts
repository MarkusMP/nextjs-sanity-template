import {ComposeIcon, SearchIcon} from '@sanity/icons'
import {HelpCircle} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notFound',
  title: 'notFound',
  icon: HelpCircle,
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', icon: ComposeIcon, default: true},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'content',
      type: 'sectionBuilder',
      group: 'content',
    }),
  ],
})

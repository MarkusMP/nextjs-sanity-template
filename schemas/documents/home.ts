import {ComposeIcon, SearchIcon} from '@sanity/icons'
import {Home} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  icon: Home,
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', icon: ComposeIcon, default: true},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title for menu & links',
      description:
        "💡 This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding links or searching & browsing the CMS.",
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

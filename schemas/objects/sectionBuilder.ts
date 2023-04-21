import {defineType} from 'sanity'

export default defineType({
  name: 'sectionBuilder',
  title: 'Section Builder',
  type: 'array',
  validation: (rule) => rule.unique(),
  of: [{type: 'hero'}],
})

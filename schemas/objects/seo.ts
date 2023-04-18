import {getExtension, getImageDimensions} from '@sanity/asset-utils'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'noIndex',
      description: `Hide this page from search engines and the sitemap`,
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: `titleSEO`,
      type: `string`,
      title: 'Title for SEO & social sharing',
      description:
        'Make it as enticing as possible to convert users in social feeds and Google searches, Ideally between 15 and 70 characters.',
    }),
    defineField({
      name: `descriptionSEO`,
      title: 'Short paragraph for SEO & social sharing (meta description)',
      description:
        "⚡ Optional but highly encouraged as it'll help you convert more visitors from Google & social, Ideally between 70 and 160 characters.",
      type: `text`,
      rows: 3,
      validation: (Rule) => [
        Rule.max(180).warning('Description should be less than 180 characters'),
        Rule.min(120).warning('Description should be at least 120 characters'),
      ],
    }),
    defineField({
      name: `image`,
      type: `image`,
      options: {hotspot: true},
      validation: (rule) =>
        rule.custom((value) => {
          if (!value?.asset?._ref) {
            return true
          }

          const filetype = getExtension(value.asset._ref)

          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }

          const {width, height} = getImageDimensions(value.asset._ref)

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }

          return true
        }),
    }),
  ],
})

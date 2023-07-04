import {getExtension, getImageDimensions} from '@sanity/asset-utils'
import {defineField, defineType} from 'sanity'

import {
  CustomFieldDescription,
  InputCounterDescription,
} from '@/sanity/components/InputCounterDescription'
import {
  CustomFieldTitle,
  InputCounterTitle,
} from '@/sanity/components/InputCounterTitle'

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
      description: `Hide this page from search engines.`,
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Title for SEO & social sharing',
      description:
        'Make it as enticing as possible to convert users in social feeds and Google searches, Ideally between 15 and 70 characters.',
      name: 'titleSEO',
      type: 'string',
      validation: (Rule) => Rule.required().min(15).max(70),
      components: {
        input: InputCounterTitle,
        field: CustomFieldTitle,
      },
    }),
    defineField({
      name: 'descriptionSEO',
      type: 'string',
      title: 'Short paragraph for SEO & social sharing (meta description)',
      description:
        "⚡ Optional but highly encouraged as it'll help you convert more visitors from Google & social, Ideally between 70 and 160 characters.",
      validation: (Rule) => Rule.max(160).error(),
      components: {
        input: InputCounterDescription,
        field: CustomFieldDescription,
      },
    }),
    defineField({
      name: `image`,
      type: `image`,
      title: 'Social sharing image',
      description:
        '⚡ Optional but highly encouraged for increasing conversion rates for links to this page shared in social media.',
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

import {MenuIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'header',
  title: 'Header',
  icon: MenuIcon,

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
      name: 'menuItems',
      description: 'Menu links',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          fields: [
            defineField({
              name: 'link',
              type: 'link',
            }),
          ],
          preview: {
            select: {
              refSlug: 'link.reference.slug.current',
              refTitle: 'link.reference.title',
              text: 'link.text',
              url: 'link.url',
            },
            prepare(selection) {
              const {refSlug, refTitle, text, url} = selection

              let subtitle
              if (refSlug) {
                subtitle = refSlug
              } else if (url) {
                subtitle = url
              }

              return {
                title: !text && !refTitle ? `Empty Text` : text ?? refTitle,
                subtitle: subtitle ?? `No link`,
              }
            },
          },
        }),
      ],
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkList',
  title: 'Link List',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'menuItems',
      description: 'links',
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

import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

// install this dependency when it's fixed
// import {SEOPane} from 'sanity-plugin-seo-pane'
import {getPreviewUrl} from './getPreviewUrl'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  {schemaType}
) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
            reload: {button: true},
          })
          .title('Preview'),
        // S.view
        //   .component(SEOPane)
        //   .options({
        //     // Retrieve the keywords and synonyms at the given dot-notated strings
        //     keywords: `seo.keywords`,
        //     synonyms: `seo.synonyms`,
        //     url: (doc) => getPreviewUrl(doc),

        //     // Alternatively, specify functions (may be async) to extract values
        //     // keywords: doc => doc.seo?.keywords,
        //     // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
        //     // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
        //   })
        //   .title('SEO'),
      ])
    case `home`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
            reload: {button: true},
          })
          .title('Preview'),
        // S.view
        //   .component(SEOPane)
        //   .options({
        //     // Retrieve the keywords and synonyms at the given dot-notated strings
        //     keywords: `seo.keywords`,
        //     synonyms: `seo.synonyms`,
        //     url: (doc) => getPreviewUrl(doc),

        //     // Alternatively, specify functions (may be async) to extract values
        //     // keywords: doc => doc.seo?.keywords,
        //     // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
        //     // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
        //   })
        //   .title('SEO'),
      ])
    case `notFound`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
            reload: {button: true},
          })
          .title('Preview'),
        // S.view
        //   .component(SEOPane)
        //   .options({
        //     // Retrieve the keywords and synonyms at the given dot-notated strings
        //     keywords: `seo.keywords`,
        //     synonyms: `seo.synonyms`,
        //     url: (doc) => getPreviewUrl(doc),

        //     // Alternatively, specify functions (may be async) to extract values
        //     // keywords: doc => doc.seo?.keywords,
        //     // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
        //     // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
        //   })
        //   .title('SEO'),
      ])

    default:
      return S.document().views([S.view.form()])
  }
}

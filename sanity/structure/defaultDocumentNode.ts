import {DefaultDocumentNodeResolver} from 'sanity/desk'
// import DocumentsPane from 'sanity-plugin-documents-pane'
import Iframe from 'sanity-plugin-iframe-pane'

// import OGPreview from '../components/OGPreview'
// import SocialSharePreview from '../components/SocialSharePreview'
// import {getOgUrl} from './getOgUrl'
import {getPreviewUrl} from './getPreviewUrl'
// import {getSocialShareUrl} from './getSocialShareUrl'

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
        //   .component(OGPreview)
        //   .options({
        //     url: (doc) => getOgUrl(doc),
        //   })
        //   .title('Open Graph'),
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
        //   .component(OGPreview)
        //   .options({
        //     url: (doc) => getOgUrl(doc),
        //   })
        //   .title('Open Graph'),
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
        //   .component(OGPreview)
        //   .options({
        //     url: (doc) => getOgUrl(doc),
        //   })
        //   .title('Open Graph'),
      ])

    default:
      return S.document().views([S.view.form()])
  }
}

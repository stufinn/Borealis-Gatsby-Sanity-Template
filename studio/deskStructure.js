import S from '@sanity/desk-tool/structure-builder';
import blogPost from './schemas/documents/blogPost';
import { FaHome } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

// creating "singletons": https://www.sanity.io/docs/structure-builder-typical-use-cases#singletons-and-one-of-documents-c22ce054acba
// more: https://www.frontendstumbles.com/creating-singleton-pages-with-sanity/
// official tutorial: https://www.sanity.io/guides/getting-started-with-structure-builder

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Home Page Content').icon(FaHome).child(
        S.editor() // is this supported anymore? Can't find official docs on this = but using S.document() seems to work. EDIT:  Found this article: https://www.sanity.io/guides/getting-started-with-structure-builder
          .schemaType('homePage')
          .documentId('homePage')
      ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage', 'settings'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Site Settings')
        .icon(FiSettings)
        .child(S.document().schemaType('settings').documentId('settings')),
    ]);

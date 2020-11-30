// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import customPage from './documents/customPage';
import homePage from './documents/homePage';
import settings from './documents/settings';
import miscImage from './miscImage';
import inlineImage from './inlineImage';
import serviceIcon from './serviceIcon';
import blogPost from './documents/blogPost';
import files from './files';
import blockContent from './blockContent';
import albumImage from './albumImage';
import albums from './documents/albums';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blogPost,
    customPage,
    homePage,
    miscImage,
    inlineImage,
    serviceIcon,
    settings,
    files,
    blockContent,
    albumImage,
    albums,
  ]),
});

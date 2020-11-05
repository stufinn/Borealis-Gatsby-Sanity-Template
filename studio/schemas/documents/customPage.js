import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'customPage',
  type: 'document',
  title: 'Custom Pages',
  icon: RiPagesLine,
  fields: [
    {
      name: 'includeInMenu',
      title: 'Add to menu bar?',
      type: 'boolean',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Max length 96 characters',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Brief description (Optional)',
      name: 'description',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: (Rule) => Rule.min(20).max(300),
    },
    {
      title: 'Main Content',
      name: 'mainContent',
      type: 'blockContent',
    },
    {
      name: 'files',
      type: 'files',
      description:
        'Upload files.  Accepted file formats include images, MS word documents and PDf files.',
    },
    {
      title: 'Feature Image',
      name: 'moreInfoImage',
      type: 'miscImage',
      description:
        'OPTIONAL: Image to be highlighted in the "more info" section.',
    },
  ],
};

export default {
  name: 'pages',
  type: 'document',
  title: 'Service Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(100)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Max length 96 characters',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Brief description (Optional)',
      name: 'description',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: Rule => Rule.min(20).max(300)
    },
    {
      title: 'More Info',
      name: 'mainContent',
      type: 'array',
      of: [{ type: 'block' }, { type: 'inlineImage' }],
      description: 'Text content for the hidden "More Info" section',
      validation: Rule => Rule.required()
    },
    {
      title: 'Feature Image',
      name: 'moreInfoImage',
      type: 'miscImage',
      description:
        'OPTIONAL: Image to be highlighted in the "more info" section.'
    },
    {
      name: 'blurb1Title',
      type: 'string',
      title: 'Blurb 1 Title',
      validation: Rule => Rule.min(3).max(50)
    },
    {
      title: 'Blurb 1 Content',
      name: 'blurb1',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: Rule => Rule.min(20).max(300)
    },

    {
      name: 'blurb2Title',
      type: 'string',
      title: 'Blurb 2 Title',
      validation: Rule => Rule.min(3).max(50)
    },
    {
      title: 'Blurb 2 Content',
      name: 'blurb2',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: Rule => Rule.min(20).max(300)
    },
    {
      name: 'blurb3Title',
      type: 'string',
      title: 'Blurb 3 Title',
      validation: Rule => Rule.min(3).max(50)
    },
    {
      title: 'Blurb 3 Content',
      name: 'blurb3',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: Rule => Rule.min(20).max(300)
    },
    {
      title: 'Service icon',
      name: 'serviceIcon',
      type: 'serviceIcon',
      validation: Rule => Rule.required()
    },
    {
      title: 'Contact section image',
      name: 'contactImage',
      type: 'miscImage'
    }
  ]
};

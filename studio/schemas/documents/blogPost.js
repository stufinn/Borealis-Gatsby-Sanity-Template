export default {
  name: 'blogPost',
  title: 'Updates',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(500),
    },
    {
      name: 'slug',
      type: 'slug',
      description:
        'This is the last portion of the URL. e.g. www.borealisweb.ca/post1',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      title: 'A Brief Summary',
      name: 'summary',
      type: 'text',
      rows: 1,
      description: 'Optional but recommended. Max length 300 characters.',
      validation: (Rule) => Rule.max(300),
    },
    {
      title: 'Main Content ',
      name: 'postContent',
      description: 'The main content of your update post.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'inlineImage' }],
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'miscImage',
      description:
        'OPTIONAL: Image to be highlighted in the post preview and at the top of your post.',
    },
    {
      title: 'Published on',
      name: 'publishedDate',
      type: 'date',
      description:
        'OPTIONAL: Provide a date to override original "published" on date.',
    },
  ],
};

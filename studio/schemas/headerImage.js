export default {
  title: 'Header Image',
  name: 'headerImage',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description:
        'Provide a brief description of the image for accessibility purposes.',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
      description: 'Credit image if necessary',
      options: {
        isHighlighted: true
      }
    }
  ]
};

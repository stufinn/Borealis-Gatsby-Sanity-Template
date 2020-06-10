export default {
  title: 'Image',
  name: 'miscImage',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      validation: Rule => Rule.required(),
      description: 'A short description for accessability (1-5 words)',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution'
    }
  ]
};

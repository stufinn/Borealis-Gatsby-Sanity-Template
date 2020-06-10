export default {
  name: 'inlineImage',
  title: 'Inline Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'A brief description of image for accessability (1-5 words)',
      options: {
        isHighlighted: true
      }
    }
  ]
};

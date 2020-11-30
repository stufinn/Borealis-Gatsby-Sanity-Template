export default {
  title: 'Album Image',
  name: 'albumImage',
  type: 'object',
  fields: [
    {
      name: 'myImage',
      type: 'image',
      options: {
        accept: 'image/jpeg, image/png',
        hotspot: true,
      },
    },
    {
      name: 'imageTitle',
      title: 'Image Title (Required)',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'The title will display with the photo',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'altText',
      title: 'Alt Text (Required)',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description:
        'A brief discription of the image to improve with website accessibility.',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      title: 'imageTitle',
      media: 'myImage', //why doesn't this work?
      altText: 'altText',
    },
    prepare(selection) {
      const { title, media, altText } = selection;
      return Object.assign({}, selection, {
        title: title,
        subtitle: altText,
      });
    },
  },
};

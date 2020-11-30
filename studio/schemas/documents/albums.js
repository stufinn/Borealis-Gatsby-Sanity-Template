import { BiPhotoAlbum } from 'react-icons/bi';

export default {
  name: 'albums',
  title: 'Albums',
  icon: BiPhotoAlbum,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (Required)',
      type: 'string',
      validation: (Rule) => Rule.required().max(25).min(3),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Brief Description',
      type: 'string',
      description: 'Maximum 100 characters',
      validation: (Rule) => Rule.max(100),
    },
    {
      title: 'Images',
      name: 'albumImages',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'albumImage',
          title: 'Image',
        },
      ],
    },
  ],
};
